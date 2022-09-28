import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbActiveModal, NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(public router:Router,private route:ActivatedRoute) { }
  chanelname:any;
  username:any;

  ngOnInit(): void {this.check_get()}
  check_get(){
    this.chanelname=this.route.snapshot.paramMap.get('chanelname');
    this.username=this.route.snapshot.paramMap.get('username');
    console.log(this.chanelname);
    console.log(this.username);
  }
}
