import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeroComponent } from './hero/hero.component';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import { BasketComponent } from './basket/basket.component';

import { AuthService } from './auth.service';
import { HeroService } from './hero.service';
import { BasketService } from './basket.service';
import { AuthGuardService } from './auth-guard.service';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeroComponent,
    HeroCreateComponent,
    BasketComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent }, 
      { path: 'register', component: RegisterComponent },
      { path: 'deteil/:id', canActivate:[AuthGuardService], component: HeroComponent },
      { path: 'create', canActivate:[AuthGuardService], component: HeroCreateComponent },
      { path: 'basket', component: BasketComponent },
    ])
  ],
  providers: [AuthService, HeroService, BasketService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
