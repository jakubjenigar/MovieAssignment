import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/movies';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})


export class MovieService {

constructor(private http: HttpClient) {}

getAll() {
  return this.http.get(baseUrl);
}

}
