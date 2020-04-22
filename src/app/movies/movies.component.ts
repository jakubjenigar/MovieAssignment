import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

import {Movie} from '../movie.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];


  constructor(private movieService: MovieService) {
  }

  ngOnInit() {

    const movieObservable = this.movieService.getAll();
    movieObservable.subscribe((moviesData: Movie[]) => { this.movies = moviesData;
     }
     );
  }

  deleteMovie() {
    this.movieService.delete()
    .subscribe();
    setTimeout(() => window.location.reload(), 1000);
  }

  public deleteMovieById(id) {
    this.movieService.deleteById(id)
    .subscribe();
    setTimeout(() => window.location.reload(), 1000);
  }

  public addMovie(movie: Movie) {
    this.movieService.addMovie(movie).subscribe();
  }

}
