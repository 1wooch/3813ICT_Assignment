import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  userName=localStorage.getItem('username');

  role=localStorage.getItem('role');    
  superadmin=false;
  login=false;
  groupAdmin=false;
  loginbutton=true;


  constructor(private router:Router){}
  ngOnInit(): void {this.userIsSuperAdmin(),this.loginStatus(),this.userIsGroupAdmin()}
  

  title = 'assignment';
  public logout(){
    localStorage.clear();
    //window.location.reload(); //refresh the current page
    //+redirect to login page?
    //window.location.reload(); //refresh the current page
    this.router.navigateByUrl('login');

  }


  public userIsSuperAdmin(){
    //console.log("taest231"+this.role);
    //console.log("isadmin="+this.isAdmin);

    if(this.role=="superadmin"){
      this.superadmin=true;
      console.log("superadmin123"+this.superadmin);
    }else{
      this.superadmin=false;
      console.log("superadmin111"+this.superadmin);
    }
    //console.log("isadmin123="+this.isAdmin);
  }


  public loginStatus(){
    
    if(this.userName===null){
      this.login=false
      this.loginbutton=true;

    }else{
      this.login=true
      this.loginbutton=false;

    }
    if(this.login){
      //console.log("log in!");
      console.log(this.login);
    }
    else{
      //console.log("not log in yet");
      console.log(this.login);

    }
  }
  public userIsGroupAdmin(){

    this.role=localStorage.getItem('role');
    //console.log(this.role);

    if(this.role==="groupadmin" ||this.role==="superadmin"){
      this.groupAdmin=true;
      console.log("group admin"+this.groupAdmin);
    }else{
      this.groupAdmin=false;
      console.log(this.groupAdmin);
    }
  }
  
}
