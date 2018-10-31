import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
  
})
export class NavMenuComponent {
  constructor(private heroService: HeroService){}

  onExit(){
    localStorage.removeItem("jwt");
    this.heroService.token=null;
  }
}
