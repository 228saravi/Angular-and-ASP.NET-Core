import { Injectable, Inject} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { reject } from 'q';

@Injectable()
export class AuthService {
  _BASE_URL: string;
  constructor( 
    private http: HttpClient, 
    @Inject('BASE_URL') baseUrl: string) { 
    this._BASE_URL=baseUrl;
  }

  
  login(email:string, password:string) : Observable<any>{ 
    
    return this.http.post<any>( this._BASE_URL+ 'api/account/login',JSON.stringify({Email:email,Password:password}), {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
    
  }
  register(email:string, password:string) : Observable<any>{ 
    
    return this.http.post<any>( this._BASE_URL+ 'api/account/register',JSON.stringify({Email:email,Password:password}), {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
    
  }

}
