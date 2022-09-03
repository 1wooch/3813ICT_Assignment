import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

const httpOptions={
  headers:new HttpHeaders(
    {
      'Content-Type':'application/json'
})};

const BACKEND_URL='http://localhost:3000';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {
  form:any={
    username:null,
    password:null
  };

  constructor(private httpClient:HttpClient,private router:Router){}

  ngOnInit(): void {
  }
  public loginfunc(){
    const{username,password}=this.form;
    //console.log(username,password)
    this.httpClient.post(BACKEND_URL+'/login',{username:username,pwd:password})
    .subscribe((data:any)=>{
      console.log(data.ok);
            if(data.ok){
              alert("success");
              //console.log(data.age); //working 22
              //console.log(data.email);
              //console.log(data.birthdate)
              sessionStorage.setItem('username',data.username);
              sessionStorage.setItem('email',data.email);
              sessionStorage.setItem('age',data.age);
              sessionStorage.setItem('role',data.role);
              sessionStorage.setItem('birthdate',data.birthdate);
              sessionStorage.setItem('pwd',data.pwd);
              this.router.navigateByUrl('account');

            }if(data.ok==false) {
              alert('Sorry username or password is wrong');
              window.location.reload();
            }
          });
    
  }
}
