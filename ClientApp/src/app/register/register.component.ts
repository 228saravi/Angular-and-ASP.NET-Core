import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { HeroService } from '../hero.service';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import { from } from 'rxjs/observable/from';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


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
  }
  onSubmit(f: NgForm){
    console.log(f);
     this.authService.register(f.value.email,f.value.Password).subscribe(response => {
        localStorage.setItem("jwt", (<any>response).token); 
        this.heroServise.token =(<any>response).token       
        this._router.navigate(['/'])
      }, err => {
        console.log(err);
      });
  }

}
