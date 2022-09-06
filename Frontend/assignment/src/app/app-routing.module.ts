import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { GroupAdminComponent } from './group-admin/group-admin.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'account',component:AccountComponent},
  {path:'manageuser',component:ManageUserComponent},
  {path:'groupadmin',component:GroupAdminComponent}
];

@NgModule({
  declarations:[],
  
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
