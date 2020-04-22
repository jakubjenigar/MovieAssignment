import { TvShowsService } from './../tvshows.service';
import { Component, OnInit } from '@angular/core';
import { TvShows} from "./tvshows.model";
import { Observable} from "rxjs";

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css'],
  providers: [TvShowsService]
})
export class TvshowsComponent implements OnInit {
 tvShows: TvShows[] = [];
  constructor(private showService: TvShowsService) {
  }

  ngOnInit() {
  const TvShowObservable = this.showService.getTvShows();
  TvShowObservable.subscribe((ShowsData: TvShows[]) => {this.tvShows = ShowsData});
  }


}
