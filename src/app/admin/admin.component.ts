import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TvShowsService} from "../tvshows.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

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
    this.showService.createTvShow(data);

  }

}

