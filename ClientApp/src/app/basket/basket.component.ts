import { Component, OnInit } from '@angular/core';
import { BasketService} from '../basket.service';
import { HeroComponent } from '../hero/hero.component';
import { Hero } from '../hero';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  basket: Hero[] = [];
  ngOnInit() {
    this.basket=this.basketService.basketHero;
  }

}
