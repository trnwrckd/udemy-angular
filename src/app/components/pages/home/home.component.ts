import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  popularMovies : Movie[] = [];
  upcomingMovies : Movie[] = [];
  topRatedMovies : Movie[] = [];

  constructor( private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((res : any)=>{
      this.popularMovies = res.results;
    })
    this.moviesService.getMovies('upcoming').subscribe((res : any)=>{
      this.upcomingMovies = res.results;
    })
    this.moviesService.getMovies('top_rated').subscribe((res : any)=>{
      this.topRatedMovies = res.results;
    })
  }

}
