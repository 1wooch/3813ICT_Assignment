import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs';
import io from 'socket.io-client';
const SERVER_URL='http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket:any;

  constructor() { }
  initSocket(){
    this.socket=io(SERVER_URL);
    return()=>{this.socket.disconnect();}
  }
  send(message:string,username:string){
    this.socket.emit('message',message); //should I combine this 2?
    this.socket.emit('username',username); //eventname ('eventname',input)
  }
  getMessage(){
    return new Observable(observable=>{
      this.socket.on('message',(data:any)=>{observable.next(data)});
    });
  }
  getUsername(){
    return new Observable(observable=>{
      this.socket.on('username',(username:any)=>{observable.next(username)
        console.log('username: ',username);});
     

  });

  }}