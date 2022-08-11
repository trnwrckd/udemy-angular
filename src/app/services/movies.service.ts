import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of, switchMap } from 'rxjs';
import { Movie, MovieDTO, MovieCasts, MovieImages, VideoDTO, GenreDTO } from '../models/models';

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

  getMoviesByGenres( id : number , page : number){
    return this.http.get<MovieDTO>(`${this.baseUrl}/discover/movie?with_genres=${id}&page=${page}&api_key=${this.apiKey}`)
    .pipe(switchMap(res =>{
      return of(res.results);
    }))
  }

  searchMovies( page : number , searchParam? : string){
    const uri = searchParam ? 'search/movie' : 'movie/popular'
    return this.http.get<MovieDTO>(`${this.baseUrl}/${uri}?page=${page}&query=${searchParam}&api_key=${this.apiKey}`)
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

  // genre
  getMovieGenres(){
    return this.http.get<GenreDTO>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
    .pipe(switchMap(res =>{
      return of(res.genres);
    }))
  }


  
}
