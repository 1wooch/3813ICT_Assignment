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

  constructor(private modalService: NgbModal,private httpClient:HttpClient,private router:Router){}
  closeResult = '';
  

  ngOnInit(): void {}


  public clickedModalClose(){
    this.modal=false;
  }
 public clickedModal(){
    this.modal=true;

  }
  public getUser(){
    //const userInfo={};

    this.httpClient.post(BACKEND_URL+'/manageUser',null).subscribe((data:any)=>{
      console.log(data.userArray);//working
      this.userInfo=data.userArray;

      //this.userInfo=JSON.parse( data.userArray);no
      console.log(this.userInfo.username);
    });

  }
  
}
