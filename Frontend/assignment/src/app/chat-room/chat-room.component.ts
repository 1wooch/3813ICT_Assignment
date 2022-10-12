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
  messages:string[]=[]; // store the message as list 
  users:string[]=[]; // store user name of message in list

  messagecontent:string="";
  
  sender_username:any;
  sender_message:any;
  chat_list:any[]=[];

  images:any[]=[];
  userProfile:any=localStorage.getItem('image');
  profileImages:any[]=[]; // store user profile imagess in list.


 


  ngOnInit(): void {this.check_get(),this.initIoConnection()}

  private check_get(){ // get the chanelname and user name from chatroom-list
    this.chanelname=this.route.snapshot.paramMap.get('chanelname');
    this.username=this.route.snapshot.paramMap.get('username');

    

    //get user name and chanel naem for socket connection and message
  }
  private initIoConnection(){

    this.socketService.initSocket();
    this.socketService.join(this.chanelname);
    this.ioConnection=this.socketService. getMessage().subscribe((message:any)=>{ // by using observe if the observe do something get a message from it 
      //console.log(message) 
      this.messages.push(message); // push it in message list
      this.sender_message=message;
    });
    this.ioConnection=this.socketService.getUsername().subscribe((username:any)=>{ // by using observe if the observe do something get a username from it  
      this.users.push(username);
      this.sender_username=username;
    });
    this.ioConnection=this.socketService.getImage().subscribe((image:any)=>{ // by using observe if the observe do something get a image from it 
      this.images.push(image);
      //console.log(this.images);
    });
    this.ioConnection=this.socketService.getUserProfile().subscribe((profileImage:any)=>{ // by using observe if the observe do something get a user profile from it 
      this.profileImages.push(profileImage);

    })
  
   
  }
  public chat(){ // send the chat into socket (send chat button)
    if(this.messagecontent){
      //console.log(this.userProfile);

      this.socketService.send(this.messagecontent,this.username,this.chanelname,this.userProfile);
      this.messagecontent='';

    }else{
      console.log("no message");

    }

  }
  joinroom(){ //join the chat room
    this.socketService.join(this.chanelname);

  }
  imageSelected(files:any){ // image select and send it to socket.
    if(files.length>0){
      alert("image selected: "+files[0].name);
    }
    let fileReader=new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload=e=>{
      let buf = fileReader.result;
      //console.log(buf);

      this.socketService.sendImage(this.chanelname,buf);//buf,this.username,this.chanelname);
      console.log(this.userProfile);

    };
  }
}
////socket.room() with a string (name of the room) I think
