import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/person';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  constructor(private http: HttpClient) {}

  // Get all users
  getAll() {
    return this.http.get(baseUrl);
  }

  // Create a new user
  create(data) {
    return this.http.post(baseUrl, data);
  }

  // Get user by id
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Update user information by id
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // Delete all users
  deleteAll() {
    return this.http.delete(baseUrl);
  }

  // Delete a user by id
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // Login check
  loginCheck(username, password) {
    return this.http.get(`${baseUrl}/login/${username}/${password}`);
  }

}
