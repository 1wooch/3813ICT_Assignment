import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  userName=sessionStorage.getItem('username');

  role=sessionStorage.getItem('role');    
  isAdmin=false;
  login=false;
  groupAdmin=false;


  constructor(private router:Router){}
  ngOnInit(): void {this.userIsSuperAdmin(),this.loginStatus(),this.userIsGroupAdmin()}
  

  title = 'assignment';
  public logout(){
    sessionStorage.clear();
    //window.location.reload(); //refresh the current page
    //+redirect to login page?
    window.location.reload(); //refresh the current page
    this.router.navigateByUrl('login');

  }
  public userIsSuperAdmin(){
    this.isAdmin=false;
    this.role=sessionStorage.getItem('role');
    console.log(this.role);

    if(this.role==="superadmin"){
      this.isAdmin=true;
      console.log(this.isAdmin);
    }else{
      this.isAdmin=false;
      console.log(this.isAdmin);
    }
  }
  public loginStatus(){
    if(this.userName===null){
      this.login=false
    }else{
      this.login=true
    }
    if(this.login){
      console.log("log in!");
      console.log(this.login);
    }
    else{
      console.log("not log in yet");
      console.log(this.login);

    }
  }
  public userIsGroupAdmin(){
    this.isAdmin=false;
    this.role=sessionStorage.getItem('role');
    console.log(this.role);

    if(this.role==="groupadmin"){
      this.groupAdmin=true;
      console.log("group admin"+this.groupAdmin);
    }else{
      this.groupAdmin=false;
      console.log(this.groupAdmin);
    }
  }
  
}
