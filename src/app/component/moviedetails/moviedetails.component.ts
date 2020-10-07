import { setObject } from './../utils/local-store';
import { Movie } from './../../dto/movies.model';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/providers/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  movieId: any;
  movie: Movie;

  constructor(private _route: ActivatedRoute, private  _movieService: MoviesService) {
    this.movie = new Movie();
    console.log(this.movieId);
    this.getMovieById();
   }

  ngOnInit(): void {
  }

  getMovieById() {
    this._movieService.fetchMovieById(this.movieId).subscribe(() => {
      this.movie = this._movieService._movie;
    });
  }

}
