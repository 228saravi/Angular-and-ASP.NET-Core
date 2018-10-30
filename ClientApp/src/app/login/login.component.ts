import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { AuthService } from '../auth.service';

import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() jwtAuth: EventEmitter<any> = new EventEmitter();
  _router : Router;
  constructor(private authService: AuthService,router: Router) { 
    this._router=router;
    if(localStorage.getItem("jwt")){
      router.navigate(['/']);
    }
  }

  ngOnInit() {
  }
  onSubmit(Email,Password){
    console.log(Email);
     this.authService.login(Email.value,Password.value).subscribe(response => {
        localStorage.setItem("jwt", (<any>response).token);    
        this._router.navigate(['/'])
      }, err => {
        console.log(err);
      });
  }


}
