import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { first } from 'rxjs';
import { IMAGESIZE } from '../../../helpers/imageSize';
import { Movie, MovieCasts, MovieImages, MovieVideo } from '../../../models/models';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie : Movie|null = null;
  videos : MovieVideo[] = [];
  images : MovieImages | null = null;
  casts : MovieCasts | null = null;

  readonly imageSize = IMAGESIZE
  constructor( private route : ActivatedRoute , private movieService : MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe( ({id}) => {
        this.getMovie(id)
        this.getMovieVideo(id)
        this.getMovieImages(id)
        this.getMovieCasts(id)
    })
  }

  getMovie(id : number){
    this.movieService.getSingleMovie(id).subscribe( movieData =>{
      this.movie = movieData
    })
  }

  getMovieVideo(id : number){
    this.movieService.getVideos(id).subscribe( movieData =>{
      this.videos = movieData
    })
  }

  getMovieImages(id : number){
    this.movieService.getImages(id).subscribe( images =>{ 
      this.images = images
    })
  }

  getMovieCasts(id : number){
    this.movieService.getCasts(id).subscribe( casts =>{ 
      this.casts = casts
      console.log(casts)
    })
  }

}
