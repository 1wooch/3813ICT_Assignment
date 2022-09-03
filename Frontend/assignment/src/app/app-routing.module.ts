import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ManageUserComponent } from './manage-user/manage-user.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'account',component:AccountComponent},
  {path:'manageuser',component:ManageUserComponent}
];

@NgModule({
  declarations:[],
  
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
