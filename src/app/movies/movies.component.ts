import { MovieService } from './../movie.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent {
  movies;

  constructor(movieService: MovieService) {
    this.movies = movieService.getMovie();
  }

}
