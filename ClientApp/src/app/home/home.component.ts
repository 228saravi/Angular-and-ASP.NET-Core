import { Component } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { BasketService} from '../basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  heroes:Hero[];
  constructor(private heroService:HeroService,
    private basketService: BasketService) {}
  ngOnInit() {
    this.getHeroes();
    console.log(this.heroes);
  }
  getHeroes(): void {
    this.heroService.getHero()
        .subscribe(heroes => this.heroes=heroes);
  }
  onClickBasket(hero: Hero): void {
    this.basketService.addHero(hero);
  }
}
