import { Component, forwardRef, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router, TitleStrategy} from '@angular/router';
import {NgbActiveModal, NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { group } from '@angular/animations';
import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';

const httpOptions={
  headers:new HttpHeaders(
    {
      'Content-Type':'application/json'
})};
const BACKEND_URL='http://localhost:3000';


@Directive({
  selector: '[onCreate]'
})
export class OnCreate {

  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {      
     this.onCreate.emit('dummy'); 
  } 

}
@Component({
  selector: 'app-group-admin',
  templateUrl: './group-admin.component.html',
  styleUrls: ['./group-admin.component.css']
})




export class GroupAdminComponent implements OnInit {
  closeResult = '';


  public modal:boolean=false;
  public chanelmodal:boolean=false;

  userlist:any=[];
  username=localStorage.getItem('username');
  role=localStorage.getItem('role');
  group_list:any;
  deleteusername:any;
  public chanel_list:any;
  chenel_name:any;
  public username_save="";
  
  selectedUserName:any;
  selectedChanelName:any;
  manager_list:any=[];



  form:any={
    e_username:null

  }
  constructor(private modalService: NgbModal,private httpClient:HttpClient,private router:Router){}

  ngOnInit(): void {this.getUser(),this.addUserChanel()}

  public getUser(){
    this.manager_list=[];
    this.userlist=[];

    //console.log(this.username); //work
    this.httpClient.post(BACKEND_URL+'/groupadminget',{username:this.username})
    .subscribe((data:any)=>{
      //console.log(data.ok);
      //console.log(data.group_list);

      //console.log(data.groupname);
      this.group_list=data.group_list;
      //console.log(this.groupname+"????");
      if (data.ok==true){
        console.log("found your group!");
        this.httpClient.post(BACKEND_URL+'/getGroupMember',{group_list:this.group_list}).subscribe(
          (data:any)=>{
            // console.log("Received group member"+data.ok);
            // //console.log(data.userlist); //list of user 
            // this.userlist=data.userlist;
            // this.manager_list=data.managerlist;
            this.userlist=data.group_member_list;
            this.manager_list=data.group_admin_list;
            //console.log(this.userlist);
            console.log(this.manager_list[0][1].length);
            

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


  public removeUser(deleteusername:any,deletegrouname:any){
    console.log("username delte"+deleteusername);
    this.httpClient.post(BACKEND_URL+'/deletegroupmember',{username:deleteusername,groupname:deletegrouname})
    .subscribe((data:any)=>{
      if(data.ok){
        alert("User Deleted");
        window.location.reload();

      }
    });
  }

  public addUser(){
    console.log(this.group_list);
    const{e_email,e_role,e_age,e_birthdate,e_username,e_pwd}=this.form;
    this.httpClient.post(BACKEND_URL+'/addgroupmember',{username:e_username,groupname:this.group_list})
    .subscribe((data:any)=>{
      console.log(data.ok);

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

    this.httpClient.post(BACKEND_URL+'/deleteChanel',{username:this.username_save,chanelname:chanelname}).subscribe((data:any)=>{
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
    console.log(username[1]);
    console.log(username[0])

    this.httpClient.post(BACKEND_URL+'/searchChenal',{username:username[1],groupname:username[0]}).subscribe((data:any)=>{
      //console.log(data.chanelList);
      this.chenel_name=data.chanelList;
      console.log(this.chenel_name);

    });

  }
  
  public addUserChanel(){
    var userlist=this.userlist;
    var groupname1:any;

   this.httpClient.post(BACKEND_URL+'/groupadminget',{username:this.username})
   .subscribe((data:any)=>{
     console.log(data.ok);

    
     groupname1=data.group_list;
    console.log(groupname1,"groupname1");

     this.httpClient.post(BACKEND_URL+'/getChanelList',{groupname:groupname1}).subscribe((data:any)=>{
   
      this.chanel_list=data.result;
  

    });
   });

  }
  // openAddChanel() {
  //   this.modalService.open({ariaLabelledBy: 'modal-basic-title1'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
     
  //   });
  // }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
     
    });
  }
  public AddUserInChanel(){
    //console.log(this.selectedUserName);
    //console.log(this.selectedChanelName);
 
    if (this.selectedChanelName!=null && this.selectedUserName!=null ){
     // console.log("both filled");\
     this.selectedUserName=this.selectedUserName.split(",").slice(1).join(",");

     this.httpClient.post(BACKEND_URL+'/addUserInChanel',{username:this.selectedUserName,chanelname:this.selectedChanelName})
     .subscribe((data:any)=>{
      console.log(data);
      if (data.ok==true){
        alert("User Added");
        window.location.reload();
      }else if(data.ok==false){
        alert("user already in "+this.selectedChanelName);
        this.selectedUserName=null;
        this.selectedChanelName=null;

      }
     });
    }}

    public MakeAdmin(username:any,groupname:any){
      var makeadminusername=username;
      //console.log(this.groupname);
      this.httpClient.post(BACKEND_URL+'/makeUserAdmin',{username:makeadminusername,groupname:groupname}).subscribe((data:any)=>{
        if(data.ok){
          alert(username+" is admin now");
          window.location.reload();

        }
        else if(data.ok==false){
          alert("failed");
          window.location.reload();

        }

  
      });

      
    }
   
    public deleteAdmin(username:any,groupname:any){
    
      //console.log(this.username_save);//work;
      console.log(username);
      console.log(this.group_list);
      
      this.httpClient.post(BACKEND_URL+'/deleteGroupAdmin',{username:username,groupname:groupname}).subscribe((data:any)=>{
        console.log(data.ok);
        if(data.ok==true){
          alert("Admin deleted");
          window.location.reload();

          
        }
      })
  
    }
    public checkAdmin(username:any):any{
      var isadmin:any;
      isadmin=false;
      //console.log(this.manager_list.length); //1
      //console.log(this.manager_list[0][1].length);//2
      //console.log(username[1])
      for (let i = 0; i < this.manager_list.length; i++) {
        for (let j=0; j<this.manager_list[i][1].length; j++){
        if (this.manager_list[i][1][j]==username[1]){
          isadmin=true;
        }}
      }
      return isadmin;

    }
    public checkUser(username:any):any{
      var isUser:any;
      isUser=true;
      //console.log(username[1])

      //console.log(this.manager_list);
      for (let i = 0; i < this.manager_list.length; i++) {
        for (let j=0; j<this.manager_list[i][1].length; j++){
        if (this.manager_list[i][1][j]==username[1]){
        isUser=false;
        
        }}
      }
      return isUser;

    }
  }
