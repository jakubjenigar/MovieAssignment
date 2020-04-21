import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Movie} from '../movie.model';
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
}
