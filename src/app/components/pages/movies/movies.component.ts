import { Component, OnInit , Input} from '@angular/core';
import { MoviesService } from '../../../services/movies.service'
import { Movie } from '../../../models/models';
import { ActivatedRoute } from '@angular/router';
import {take , first} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Input() movies : Movie[] = [];
  title : string | undefined = "Movies";
  genreId : number | null = null;
  constructor(private route : ActivatedRoute, private movieService : MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({id}) =>{
      if(id){
        this.genreId = id
        this.getMoviesByGenre(id)
        this.getGenreName(id)
      }
      else{
        this.getPagedMovies(1)
      }
    })
  }

  getPagedMovies(pageNumber : number = 1){
    this.movieService.searchMovies(pageNumber).subscribe(movies =>{
      this.movies = movies
    })
  }
  getMoviesByGenre(id : number , page : number = 1){
    this.movieService.getMoviesByGenres(id , page).subscribe( movies =>{
      this.movies = movies;
    })
  }

  getGenreName(genreId : number){
    this.movieService.getMovieGenres().subscribe(genres =>{
      const genre =  genres.find(({id}) => id == genreId )
      this.title =  `${genre?.name} Movies`
    })
  }


  paginate(event : any){
    const pageNumber = event.page + 1;
    if(this.genreId){
      this.getMoviesByGenre(this.genreId , pageNumber)
    }
    else{
      this.getPagedMovies(pageNumber);
    }
  }
  
}
