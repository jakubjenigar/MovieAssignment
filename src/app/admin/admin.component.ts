import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { MoviesComponent } from '../movies/movies.component';
import { MovieComponent } from '../movie/movie.component';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})



export class AdminComponent implements OnInit {
  objectForm = {
    title: '',
    description: '',
    url: '',
    genre: '',
    picture: ''
  };

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {

  }

  onSubmit(): void {
     const data = {
      Title: this.objectForm.title,
      Description: this.objectForm.description,
      Url: this.objectForm.url,
      Genre: this.objectForm.genre,
      Picture: this.objectForm.picture
    };

     this.movieService.addMovie(data).subscribe();
  }

}

