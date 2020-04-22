import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import {Favorites} from "./favorites.model";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [FavoritesService]
})
export class FavoritesComponent implements OnInit {

  favorites: Favorites[] = [];

  constructor(private showService: FavoritesService) { }

  ngOnInit() {

    const FavoritesObservable = this.showService.getFavorites();

    FavoritesObservable.subscribe((ShowsData: Favorites[]) => {this.favorites = ShowsData});

  } 
  

}
