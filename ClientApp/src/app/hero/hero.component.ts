import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
 
import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero;
  constructor(
    private activRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.getHero()
  }

  getHero(): void {
    const id = +this.activRoute.snapshot.paramMap.get('id');
    this.heroService.detailsHero(id)
      .subscribe(hero => this.hero = hero, reject=>{
        console.log(reject);
        alert('Ошибка загрузки');
      });
  }
  onSubmit(){
    this.heroService.updateHero(this.hero).subscribe(()=> this.router.navigate(['/']),reject=>{
      console.log(reject);
      alert('Ошибка обновления');
    }
    )
  }
  onDelete(){
    this.heroService.deleteHero(this.hero.id).subscribe(()=>this.router.navigate(['/']),reject=>{
      console.log(reject);
      alert('Ошибка удаления');
    })
  }
}
