import { MoviesService } from './../../providers/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../dto/movies.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.scss']
})
export class PopularmoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private _moviesService: MoviesService, private _router: Router, private _route: ActivatedRoute, public ratingDialog: MatDialog) { 
    this.getPopularMovies();
  }

  ngOnInit(){
    this.getPopularMovies();
  }

  getPopularMovies() {
    this._moviesService.fetchPopularMovies().subscribe(() => {
      this.movies = this._moviesService.movieList;
    });
  }

  getBackground(photo: string) {
    return {
      'background': `url("https://image.tmdb.org/t/p/w300${photo}") center center no-repeat`,
      'height': '170px',
      'width': '150px',
    };
  }

  viewDetails(movie: Movie) {
    this._router.navigate([this._router.url, movie.id])
      .then(() => {
      });
  }

  openRating(){
    this.ratingDialog.open(DialogComponent);
  }

}
