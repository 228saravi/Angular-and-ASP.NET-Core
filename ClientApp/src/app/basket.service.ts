import { Injectable, EventEmitter } from '@angular/core';
import { Hero } from './hero';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class BasketService {

  basketHero: Hero[] = [];

  constructor() { }

  addHero(hero: Hero){
    this.basketHero.push(hero);
    return Observable.create((observable: Observer<any>)=>{

        observable.next(true)

      setTimeout(() => {
        observable.next(false)
      }, 5000);
    });
  }
}
