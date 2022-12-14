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
import { GroupAdminComponent } from './group-admin/group-admin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ChatroomListComponent } from './chatroom-list/chatroom-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
//Service-----------------------------------------------------------
import { SocketService } from 'src/service/socket.service';
import { Socket } from 'socket.io';
import { VideoChatComponent } from './video-chat/video-chat.component';
import { PeerService } from 'src/service/peer.service';


const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'account',component:AccountComponent},
  {path:'chat_room',component:ChatRoomComponent},
  {path:'chatroom_list',component:ChatroomListComponent},
  {path:'groupadmin',component:GroupAdminComponent},
  {path:'manageuser',component:ManageUserComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ManageUserComponent,
    GroupAdminComponent,
    MainpageComponent,
    ChatroomListComponent,
    ChatRoomComponent,
    VideoChatComponent,
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
  providers: [HttpClientModule,SocketService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
