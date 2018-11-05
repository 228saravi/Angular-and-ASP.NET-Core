import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                if(!!this.heroService.token){
                  return true;
                }
                else{
                  this.router.navigate(['/']);
                }
              }
  constructor(
    private heroService: HeroService,
    private router: Router) {  }

}
