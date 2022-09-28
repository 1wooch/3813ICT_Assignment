import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { GroupAdminComponent } from './group-admin/group-admin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ChatroomListComponent } from './chatroom-list/chatroom-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'account',component:AccountComponent},
  {path:'manageuser',component:ManageUserComponent},
  {path:'groupadmin',component:GroupAdminComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'chatroom-list',component:ChatroomListComponent},
  {path:'chatroom',component:ChatRoomComponent},

];

@NgModule({
  declarations:[],
  
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
