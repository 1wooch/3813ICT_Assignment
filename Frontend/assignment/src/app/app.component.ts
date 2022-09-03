import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  public logout(){
    sessionStorage.clear();
    window.location.reload(); //refresh the current page
    //+redirect to login page?
  }
}
