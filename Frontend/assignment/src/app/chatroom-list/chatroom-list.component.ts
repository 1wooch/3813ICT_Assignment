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
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.css']
})
export class ChatroomListComponent implements OnInit {
  username=localStorage.getItem('username');
  public chanel_list:any;
  chenel_name:any;
  result:any;


  constructor(private modalService: NgbModal,private httpClient:HttpClient,private router:Router){}

  ngOnInit(): void {this.getChanel()} // get a chanel of user involved when the page loaded.
  public getChanel(){
    this.httpClient.post(BACKEND_URL+'/get_chatroom_list',{username:this.username}) // sedn user name so the user is in chanel or not. 
    .subscribe((data:any)=>{
        this.result=data.chanelList;

    })
  }
  public joinChanel(chanelname:any){ // for the button join if the user click it then get a chanel name and user name and post it to chat-room
    this.router.navigate(['/chatroom',{chanelname:chanelname,username:this.username}]);
  }
}
