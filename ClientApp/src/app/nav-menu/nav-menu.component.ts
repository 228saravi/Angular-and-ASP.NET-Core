import { Component } from '@angular/core';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
  
})
export class NavMenuComponent {
  auth : boolean = true;
  ngOnInit() {
    if(localStorage.getItem("jwt")){
      this.auth = false;
    }
  }
  onExit(){
    localStorage.removeItem("jwt")
    this.auth = true;
  }
}
