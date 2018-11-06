import { Component } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { BasketService} from '../basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading: boolean = true;
  addBasketEmit: boolean = false;
  heroes:Hero[];
  constructor(private heroService:HeroService,
    private basketService: BasketService) {}
  ngOnInit() {
    
    this.heroService.loading.subscribe((result: boolean)=>{ 
      console.log(this.loading);
      this.loading = result;
    
      console.log(this.loading);})
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHero()
        .subscribe(heroes => {
          this.heroes=heroes;
          this.heroService.loading.next(false);
        },
        ()=>this.heroService.loading.next(false));
  }
  onClickBasket(hero: Hero): void {
    this.basketService.addHero(hero).subscribe((result)=>{
      this.addBasketEmit = result;
    });
  }
}
