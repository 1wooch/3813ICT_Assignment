import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  server = "http://localhost:3000";
  username:any;
  password:any;
  send_info:any;

  constructor( private http:HttpClient) {}
  login(){
    return this.http.post<any>(`${this.server}/login`,this.send_info);
  }
  addUser(){
    return this.http.post<any>(`${this.server}/addUser`,this.send_info);
    console.log("service is working");
    
  }
}
