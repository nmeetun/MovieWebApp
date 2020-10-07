import { Component, OnInit } from '@angular/core';
import { Movie } from '../../dto/movies.model';
import { MoviesService } from './../../providers/movies.service';


@Component({
  selector: 'app-upcomingmovies',
  templateUrl: './upcomingmovies.component.html',
  styleUrls: ['./upcomingmovies.component.scss']
})
export class UpcomingmoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private _movieService:MoviesService) { 
    this.getUpcomingMovies();
  }

  ngOnInit() {
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this._movieService.fetchUpcomingMovies().subscribe(() => {
      this.movies = this._movieService.movieList;
    });
  }

  getBackground(photo: string) {
    return {
      'background': `url("https://image.tmdb.org/t/p/w300${photo}") center center no-repeat`,
      'height': '170px',
      'width': '150px',
    };
  }

}
