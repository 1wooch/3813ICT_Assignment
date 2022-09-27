import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  public loginfunc() {
    const { username, password } = this.form;
    //console.log(username,password)
    this.httpClient
      .post(BACKEND_URL + '/login', { username: username, pwd: password })
      .subscribe((data: any) => {
        console.log(data.ok);
        if (data.ok) {
          alert('success');
          //console.log(data.age); //working 22
          //console.log(data.email);
          //console.log(data.birthdate)
          localStorage.setItem('username', data.username);
          localStorage.setItem('email', data.email);
          localStorage.setItem('age', data.age);
          localStorage.setItem('role', data.role);
          localStorage.setItem('birthdate', data.birthdate);
          localStorage.setItem('pwd', data.pwd);
          //window.location.reload();

          this.router.navigateByUrl('account');
        }
        if (data.ok == false) {
          alert('Sorry username or password is wrong');
          window.location.reload();
        }
      });
  }

  public loginfunc1() {
    const { username, password } = this.form;
    this.httpClient
      .post(BACKEND_URL + '/test', { username, password })
      .subscribe((data: any) => {
        if (data.ok) {
          console.log('LOGIN SUCCESSFUL');
          console.log(data);
        } else {
          console.log('LOGIN NOT SUCCESSFUL');
        }
      });
  }
}