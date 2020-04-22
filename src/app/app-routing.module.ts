import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {TabBarNav} from './tabBar/tabbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { FavoritesComponent } from './favorites/favorites.component';

=======
import {AdminComponent} from './admin/admin.component';
>>>>>>> ce807c0add718eb255e2b48c643cc31002e69ad7


const appRoutes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'browse', component: TabBarNav },
  { path: 'log_in', component: LoginComponent},
  { path: 'sign_up', component: SignupComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
<<<<<<< HEAD
  { path: 'favorites', component: FavoritesComponent},
=======
  { path: 'admin', component: AdminComponent},
>>>>>>> ce807c0add718eb255e2b48c643cc31002e69ad7
  { path: '**', component: LoginComponent}
];
@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
export const routingComponents = [HomeComponent, TabBarNav, LoginComponent, SignupComponent, AboutComponent,ContactComponent,FavoritesComponent,];
=======
export const routingComponents = [HomeComponent, TabBarNav, LoginComponent, SignupComponent, AboutComponent, ContactComponent];
>>>>>>> ce807c0add718eb255e2b48c643cc31002e69ad7
