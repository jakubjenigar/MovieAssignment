import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button' 
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MatTabsModule } from '@angular/material/tabs'; 
import { TabBarNav} from './tabBar/tabbar.component';
import { MatCardModule } from '@angular/material/card';
import {MatListModule } from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component'
import {MatInputModule} from '@angular/material/input'; 
import { LoginComponent } from './login/login.component';
import{SignupComponent} from './signup/signup.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';


import {MatGridListModule} from '@angular/material/grid-list'; 


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    TvshowsComponent,
    TabBarNav,
    HomeComponent,
    LoginComponent,
    SignupComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
