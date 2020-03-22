import { TvShowsService } from './../tvshows.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css'],
  providers: [TvShowsService]
})
export class TvshowsComponent implements OnInit {
  tvshows;

  constructor(tvshowsService: TvShowsService) {
    this.tvshows = tvshowsService.gettvShow();
   }

  getSeries() {
    return this.tvshows;
  }

  ngOnInit() { }
}
