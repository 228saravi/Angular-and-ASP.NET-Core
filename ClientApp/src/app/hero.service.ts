import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';


@Injectable()
export class HeroService {
  _BASE_URL: string;
  token : string;
  constructor( private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.token=localStorage.getItem("jwt");
    this._BASE_URL=baseUrl;
  }

  getHero(): Observable<Hero[]>{ 
    
    return this.http.get<Hero[]>( this._BASE_URL+ 'api/hero')
    
  }
  detailsHero(id:number): Observable<Hero>{ 
    
    return this.http.post<Hero>( this._BASE_URL+ 'api/hero/details',id, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
    
  }
  setHero(hero:Hero): Observable<any>{ 
    
    return this.http.post<any>( this._BASE_URL+ 'api/hero/create',JSON.stringify(hero), {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "authorization":"Bearer "+this.token
      })
    })
    
  }
  updateHero(hero:Hero): Observable<any>{ 
    
    return this.http.post<any>( this._BASE_URL+ 'api/hero/edit',JSON.stringify(hero), {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "authorization":"Bearer "+this.token
      })
    })
    
  }
  deleteHero(id:number): Observable<any>{ 
    
    return this.http.post<any>( this._BASE_URL+ 'api/hero/delete',id, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "authorization":"Bearer "+ this.token
      })
    })
    
  }
}
