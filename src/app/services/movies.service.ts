import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService { 
  private apiKey = environment?.apiKey || "";
  baseUrl : string  = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) {}

  getMovies(type : string = 'upcoming'){
    return this.http.get(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`);
  }
}
