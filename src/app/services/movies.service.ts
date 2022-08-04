import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService { 
  private apiKey = environment?.apiKey || "";
  constructor(private http: HttpClient) {}

  getMovies(){
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}`);
  }
}
