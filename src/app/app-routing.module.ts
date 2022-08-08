import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MovieComponent } from './components/pages/movie/movie.component';
import { MoviesComponent } from './components/pages/movies/movies.component';

const routes: Routes = [
  {
    path : '', 
    component : HomeComponent
  },
  {
    path : 'movies', 
    component : MoviesComponent
  },
  {
    path : 'movie/:id', 
    component : MovieComponent
  },
  {
    path : '**', 
    redirectTo : ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
