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

  constructor(private router:Router){}
  ngOnInit(): void {this.userIsSuperAdmin(),this.loginStatus()}
  

  title = 'assignment';
  public logout(){
    sessionStorage.clear();
    //window.location.reload(); //refresh the current page
    this.router.navigateByUrl('/login');
    //+redirect to login page?
    window.location.reload(); //refresh the current page

  }
  public userIsSuperAdmin(){
    this.isAdmin=false;
    this.role=sessionStorage.getItem('role');
    console.log(this.role);

    if(this.role==="superAdmin"){
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
  
}
