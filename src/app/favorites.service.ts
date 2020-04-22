import {HttpHeaders, HttpClient} from "@angular/common/http";

import {Observable, of} from 'rxjs';

import {map, catchError, tap} from 'rxjs/operators';

import {Injectable} from "@angular/core"




const baseUrl= "http://localhost:8080/api/favorites/"



const httpOptions = {

  headers: new HttpHeaders({

    'Content-Type': 'application/json'

  })

};


@Injectable({

  providedIn: 'root'

})

export class FavoritesService {
    
    constructor(private http: HttpClient) {


    }
    
    
    
    getFavorites(){
    
    return this.http.get(baseUrl);
    
    }
    
    
    
    }
    

//export class FavoritesService {

  //  title ='please work';
    //private apiUrl ='http://localhost:8080/api/favorites';
    //data: any = {};

    
    //constructor(private http: HttpClient){}
    //getAll() {
     // return this.http.get(baseUrl);
    //}

    //get(id) {
      //  return this.http.get(`${baseUrl}/${id}`);
   //}

   // create(data){
     //   return this.http.post(baseUrl, data);
     //}

     //update(id, data) {
       //  return this.http.put(`${baseUrl}/${id}`, data);
    //}

     //delete(id){
       //  return this.http.delete(`${baseUrl}/${id}`);
    //}

// }
