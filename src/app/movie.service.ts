import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';


@Injectable({
  providedIn: 'root'
})


export class MovieService {
baseUrl = 'http://localhost:8080/api/movies';
constructor(private http: HttpClient) {}

getAll() {
  return this.http.get(this.baseUrl);
}


delete(): Observable<{}> {
  const url = `${this.baseUrl}`; // DELETE api/heroes/42
  return this.http.delete(url);

}

deleteById(id: number): Observable<{}> {
  const url = `${this.baseUrl}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url);
}

addMovie(movie: Movie): Observable<Movie> {
  return this.http.post<Movie>(this.baseUrl, movie);

}

}
