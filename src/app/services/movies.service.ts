import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieDTO } from '../models/movieDTO';
import { of, switchMap } from 'rxjs';
import { Movie, MovieCasts, MovieImages, VideoDTO } from '../models/movie';

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

  getSingleMovie(id : number){
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  getVideos(id : number){
    return this.http.get<VideoDTO>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
    .pipe(switchMap(res =>{
      return of(res.results)
    }))
  }

  getImages(id : number){
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`) 
  }

  getCasts(id : number){
    return this.http.get<MovieCasts>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`) 
  }

  
}
