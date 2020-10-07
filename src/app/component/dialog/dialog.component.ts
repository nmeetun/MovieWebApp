import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/dto/movies.model';
import { MoviesService } from 'src/app/providers/movies.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  movies: Movie[];

  constructor(private _moviesService: MoviesService) { 
    this.getPopularMoviesRating();
  }

  getPopularMoviesRating() {
    this._moviesService.fetchPopularMovies().subscribe(() => {
      this.movies = this._moviesService.movieList;
    });
  }

  ngOnInit() {
    this.getPopularMoviesRating();
  }

}
