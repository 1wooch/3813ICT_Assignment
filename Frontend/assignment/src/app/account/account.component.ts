import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const BACKEND_URL='http://localhost:3000';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  form:any={
    e_username:null,
    e_birthdate:null,
    e_age:null,
    e_email:null,
    e_role:null,
    e_pwd:null
  }
  
  username=sessionStorage.getItem('username');
  birthdate=sessionStorage.getItem('birthdate');
  age=sessionStorage.getItem('age');
  email=sessionStorage.getItem('email');
  role=sessionStorage.getItem('role');
  pwd=sessionStorage.getItem('pwd');



  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  public edit(){
    const{e_email,e_role,e_age,e_birthdate,e_username,e_pwd}=this.form;

    //console.log(e_email,e_role,e_birthdate,e_age,e_username); //working
    sessionStorage.setItem('username',e_username);
    sessionStorage.setItem('email',e_email);
    sessionStorage.setItem('age',e_age);
    sessionStorage.setItem('role',e_role);
    sessionStorage.setItem('birthdate',e_birthdate);
    sessionStorage.setItem('pwd',e_pwd);

    
    this.httpClient.post(BACKEND_URL+'/loginafter',{pwd:e_pwd,username:e_username,email:e_email,age:e_age,role:e_role,birthdate:e_birthdate})
    .subscribe();
    
    

  }
}
