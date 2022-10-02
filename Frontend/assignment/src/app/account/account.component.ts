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
  
  username=localStorage.getItem('username');
  birthdate=localStorage.getItem('birthdate');
  age=localStorage.getItem('age');
  email=localStorage.getItem('email');
  role=localStorage.getItem('role');
  pwd=localStorage.getItem('pwd');



  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  public edit(){
    const{e_email,e_role,e_age,e_birthdate,e_username,e_pwd}=this.form;
    if(e_email !=null && e_role!=null&&e_age!=null && e_birthdate!=null && e_username!=null && e_pwd!=null){
    //console.log(e_email,e_role,e_birthdate,e_age,e_username); //working
  
    
    this.httpClient.post(BACKEND_URL+'/addUser',{pwd:e_pwd,username:e_username,email:e_email,age:e_age,role:e_role,birthdate:e_birthdate})
    .subscribe((data:any)=>{
      if (data.ok==true){
        alert("Information has changed");
        localStorage.setItem('username',e_username);
        localStorage.setItem('email',e_email);
        localStorage.setItem('age',e_age);
        localStorage.setItem('role',e_role);
        localStorage.setItem('birthdate',e_birthdate);
        localStorage.setItem('pwd',e_pwd);
    
      }else if(data.ok==false){
        alert("Information added to new user");
        window.location.reload();

      }
    });
  }else{
    alert("please fill every form");
    
  }

    

  }
}
