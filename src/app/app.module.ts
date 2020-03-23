import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent} from './navbar/toolbar/toolbar.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TvshowComponent } from './tvshow/tvshow.component';
import { FavButtonComponent } from './fav-button/fav-button.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MoviesComponent,
    MovieComponent,
    TvshowsComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    MenuComponent,
    ToolbarComponent,
    DialogComponent,
    TvshowComponent,
    FavButtonComponent
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
    ReactiveFormsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
