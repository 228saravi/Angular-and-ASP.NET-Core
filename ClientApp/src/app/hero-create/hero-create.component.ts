import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {

  hero: Hero=new Hero();
  constructor(
    private heroService: HeroService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.heroService.setHero(this.hero).subscribe(()=>{this.router.navigate(['/']),reject=>{
      alert('Ошибка добавления');
      console.log(reject);
    }})
  }
}
