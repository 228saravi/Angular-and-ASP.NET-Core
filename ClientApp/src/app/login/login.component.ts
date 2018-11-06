import { Component, OnInit , Output, EventEmitter, ViewChild} from '@angular/core';
import { AuthService } from '../auth.service';
import { HeroService } from '../hero.service';

import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  _router : Router;

  constructor(
    private authService: AuthService,
    private heroServise: HeroService,
    router: Router) { 
      this._router=router;
      if(localStorage.getItem("jwt")){
        router.navigate(['/']);
    }
  }

  ngOnInit() {
    // this.loginForm.setValue({
    //   userData:{
    //     email: "228saravi@gmail.com"
    //   }
    // });
  }
  onSubmit(){
    console.log(this.loginForm);
     this.authService.login(this.loginForm.value.userData).subscribe(response => {
        localStorage.setItem("jwt", (<any>response).token);    
        
        this.heroServise.token =(<any>response).token       
        this._router.navigate(['/'])
      }, err => {
        console.log(err);
      });
  }


}
