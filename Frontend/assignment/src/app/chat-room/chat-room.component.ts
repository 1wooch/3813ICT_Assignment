import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbActiveModal, NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SocketService } from 'src/service/socket.service';
import {FormsModule} from '@angular/forms';
import { map } from 'rxjs';




@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(public router:Router,private route:ActivatedRoute ,private socketService:SocketService) { }
  chanelname:any;
  username:any;
  ioConnection:any;
  messages:string[]=[];
  users:string[]=[];

  messagecontent:string="";
  
  sender_username:any;
  sender_message:any;
  chat_list:any[]=[];

 


  ngOnInit(): void {this.check_get(),this.initIoConnection()}
  private check_get(){
    this.chanelname=this.route.snapshot.paramMap.get('chanelname');
    this.username=this.route.snapshot.paramMap.get('username');
    console.log(this.chanelname);
    console.log(this.username); 
    //get user name and chanel naem for socket connection and message
  }
  private initIoConnection(){

    this.socketService.initSocket();
    this.ioConnection=this.socketService. getMessage().subscribe((message:any)=>{
      this.messages.push(message);
      this.sender_message=message;
    });
    this.ioConnection=this.socketService.getUsername().subscribe((username:any)=>{
      this.users.push(username);
      this.sender_username=username;
    });
  
    console.log(this.users);
    console.log(this.messages);
    

  
  }
  public chat(){
    if(this.messagecontent){
      this.socketService.send(this.messagecontent,this.username);
      this.messagecontent='';

    }else{
      console.log("no message");

    }

  }
}
////socket.room() with a string (name of the room) I think
