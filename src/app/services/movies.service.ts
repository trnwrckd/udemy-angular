import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieDTO } from '../models/movieDTO';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService { 
  private apiKey = environment?.apiKey || "";
  baseUrl : string  = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) {}

  getMovies(type : string = 'upcoming' , count : number = 12){
    return this.http.get<MovieDTO>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
    .pipe(switchMap(res =>{
      return of(res.results.slice( 0 , count))
    }));
  }

  searchMovies( page : number ){
    return this.http.get<MovieDTO>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`)
    .pipe(switchMap(res =>{
      return of(res.results)
    }));
  }
}
