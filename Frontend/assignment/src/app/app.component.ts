import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  role=sessionStorage.getItem('role');    
  isAdmin=false;
  
  constructor(private router:Router){}

  title = 'assignment';
  public logout(){
    sessionStorage.clear();
    //window.location.reload(); //refresh the current page
    this.router.navigateByUrl('login');
    //+redirect to login page?
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
}
