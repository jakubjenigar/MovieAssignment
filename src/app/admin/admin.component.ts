import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TvShowsService} from "../tvshows.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  tvshow = {
    title: "",
    description: "",
    url: "",
    genre: "",
    picture: ""
  }
  submitted = false;

  constructor(private showService: TvShowsService) {
  }

  ngOnInit() {
  }

  saveTvShow() {
    const data = {
      title: this.tvshow.title,
      description: this.tvshow.description,
      url: this.tvshow.url,
      genre: this.tvshow.genre,
      picture: this.tvshow.picture,
    }
  }

}

