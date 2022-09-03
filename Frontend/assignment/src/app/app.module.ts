import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

import { Router, RouterModule,Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'account',component:AccountComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterTestingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
