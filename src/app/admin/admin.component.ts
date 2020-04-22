import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TvShowsService} from "../tvshows.service";
import {FormControl, FormGroup} from "@angular/forms";
import {TvShows} from "../tvshows/tvshows.model";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldControl} from "@angular/material/form-field";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
tvshow : TvShows;

  form: FormGroup = new FormGroup ({
    title: new FormControl(''),
    description: new FormControl(''),
    url: new FormControl(''),
    genre: new FormControl(''),
    picture: new FormControl(''),
  });
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
    console.log("got here");
    this.showService.createTvShow(data);

  }

}

