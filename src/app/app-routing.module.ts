import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {TabBarNav} from './tabBar/tabbar.component'
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';

const appRoutes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'browse', component: TabBarNav },
  { path: 'log_in', component: LoginComponent},
  { path: 'sign_up', component: SignupComponent},
  { path: 'movies', component: MoviesComponent}
];





@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
 exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, TabBarNav, LoginComponent, SignupComponent]