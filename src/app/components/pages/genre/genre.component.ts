import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Genre } from '../../../models/models';

@Component({
  selector: 'genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  genres : Genre[] = [];
  constructor(private movieService : MoviesService) { }

  ngOnInit( ): void {
    this.getGenres()
  }
  
  getGenres(){
    this.movieService.getMovieGenres().subscribe(genres =>{
      this.genres = genres
    });
  }
}