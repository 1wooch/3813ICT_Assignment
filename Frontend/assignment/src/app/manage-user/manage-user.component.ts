import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {NgbActiveModal, NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
const httpOptions={
  headers:new HttpHeaders(
    {
      'Content-Type':'application/json'
})};

const BACKEND_URL='http://localhost:3000';



@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
  
})

export class ManageUserComponent implements OnInit {
  public modal:boolean=false;

  userInfo:any;
  form:any={
    e_username:null,
    e_birthdate:null,
    e_age:null,
    e_email:null,
    e_role:null,
    e_pwd:null
  }

  constructor(private modalService: NgbModal,private httpClient:HttpClient,private router:Router){}
  closeResult = '';
  

  ngOnInit(): void {this.getUser()}


  public clickedModalClose(){
    this.modal=false;
  }
 public clickedModal(){
    this.modal=true;

  }
  public getUser(){

    this.httpClient.post(BACKEND_URL+'/manageUser',null).subscribe((data:any)=>{
      this.userInfo=data;
      console.log(data[0]);

    });
  }
  public addUser(){
    
    const{e_email,e_role,e_age,e_birthdate,e_username,e_pwd}=this.form;
    this.httpClient.post(BACKEND_URL+'/addUser',{pwd:e_pwd,username:e_username,email:e_email,age:e_age,role:e_role,birthdate:e_birthdate})
    .subscribe((data:any)=>{
      if(data.ok==false){
        alert("user Already exist");

      }else if (data.ok==true){
        alert("user added");
        window.location.reload();
      }
    });
  }
  public removeUser(username:string){
    this.httpClient.post(BACKEND_URL+'/deleteUser',{username:username})
    .subscribe((data:any)=>{
      if(data.ok){
        alert("User Deleted");
        window.location.reload();

      }
    });
  }
  
}

