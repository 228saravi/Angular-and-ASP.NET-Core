import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../auth.service';

import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email : string ='';
  Password : string ='';
  constructor(private authService: AuthService, router: Router) { 
    if(localStorage.getItem("jwt")){
      router.navigate(['/'])
    }
  }

  ngOnInit() {
  }
  onSubmit(){
     this.authService.login(this.Email,this.Password).subscribe(response => {
        localStorage.setItem("jwt", (<any>response).token);
      }, err => {
        console.log(err);
      });
  }
  onEmail(event:Event){
    this.Email=(<HTMLInputElement>event.target).value;    
  }
  onPassword(event:Event){
    this.Password=(<HTMLInputElement>event.target).value;
  }


}
