import { Component, OnInit , Input} from '@angular/core';
import { MoviesService } from '../../../services/movies.service'
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Input() movies : Movie[] = [];
  constructor( private movieService : MoviesService) { }

  getPagedMovies(pageNumber : number = 1){
    this.movieService.searchMovies(pageNumber).subscribe(movies =>{
      this.movies = movies
    })
  }

  ngOnInit(): void {
    this.getPagedMovies()
  }

  paginate(event : any){
    this.getPagedMovies(event.page + 1);
  }
}
