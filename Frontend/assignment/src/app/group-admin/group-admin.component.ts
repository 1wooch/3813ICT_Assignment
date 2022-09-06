import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {NgbActiveModal, NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { group } from '@angular/animations';

const httpOptions={
  headers:new HttpHeaders(
    {
      'Content-Type':'application/json'
})};
const BACKEND_URL='http://localhost:3000';

@Component({
  selector: 'app-group-admin',
  templateUrl: './group-admin.component.html',
  styleUrls: ['./group-admin.component.css']
})




export class GroupAdminComponent implements OnInit {
  closeResult = '';


  public modal:boolean=false;
  public chanelmodal:boolean=false;

  userlist:any;
  username=sessionStorage.getItem('username');
  role=sessionStorage.getItem('role');
  groupname:any;
  deleteusername:any;

  chenel_name:any;
  public username_save="";



  form:any={
    e_username:null

  }
  constructor(private modalService: NgbModal,private httpClient:HttpClient,private router:Router,){}

  ngOnInit(): void {this.getUser()}

  public getUser(){
    //console.log(this.username); //work
    this.httpClient.post(BACKEND_URL+'/groupadminget',{username:this.username})
    .subscribe((data:any)=>{
      console.log(data.ok);

      //console.log(data.groupname);
      this.groupname=data.groupname;

      if (data.ok==true){
        console.log("found your group!");
        this.httpClient.post(BACKEND_URL+'/getGroupMember',{groupname:this.groupname}).subscribe(
          (data:any)=>{
            console.log("Received group member"+data.ok);
            //console.log(data.userlist); //list of user 
            this.userlist=data.userlist;

          })
      }else{
        console.log("cant find your group");
      }

    });
  }
  public clickedModalClose(){
    this.modal=false;
  }
 public clickedModal(){
    this.modal=true;

  }
public clickedchanelModalClose(){
    this.chanelmodal=false;

  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
     
    });
  }

  public removeUser(deleteusername:any){
    console.log("username delte"+deleteusername);
    this.httpClient.post(BACKEND_URL+'/deleteGroupMember',{username:deleteusername,groupname:this.groupname})
    .subscribe((data:any)=>{
      if(data.ok){
        alert("User Deleted");
        window.location.reload();

      }
    });
  }

  public addUser(){
    
    const{e_email,e_role,e_age,e_birthdate,e_username,e_pwd}=this.form;
    this.httpClient.post(BACKEND_URL+'/addGroupMember',{username:e_username})
    .subscribe((data:any)=>{
      if(data.ok==false){
        alert("user Already exist");

      }else if (data.ok==true){
        alert("user added");
        window.location.reload();
      }
    });
  }
  public deleteChanel(chanelname:any){
    
    //console.log(this.username_save);//work;
    console.log(chanelname);

    this.httpClient.post(BACKEND_URL+'/deleteCenel',{username:this.username_save,chanelname:chanelname}).subscribe((data:any)=>{
      //console.log(data.ok);
      if(data.ok==true){
        alert("user deleted");
        window.location.reload();

      }
    })

  }
  public clickedchanelModal(groupname:any,username:any){
    this.chanelmodal=true;
    this.username_save=username;

    this.httpClient.post(BACKEND_URL+'/searchChenel',{username:username,groupname:groupname}).subscribe((data:any)=>{
      console.log(data.chanelList);
      this.chenel_name=data.chanelList;

    })
  }
}
