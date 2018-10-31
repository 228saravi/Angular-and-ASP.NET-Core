import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class BasketService {

  basketHero: Hero[] = [];

  constructor() { }

  addHero(hero: Hero){
    this.basketHero.push(hero);
  }
}
