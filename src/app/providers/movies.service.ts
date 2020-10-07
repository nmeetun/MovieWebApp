import { IPopularMovies } from 'src/app/component/popularmovies/popularmovies';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Movie } from '../dto/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private _movieList: Movie[];
  public _movie: Movie;

  constructor(private http: HttpClient) {
  }

  get movieList(): Movie[] {
    return this._movieList;
  }

  getMoviesList() {
    return this.http.get('./assets/movies.json');
  }


  fetchPopularMovies(): Observable<any> {
    this._movieList = [];
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
      .pipe(map((data: any) => {
      if (data != null) {
        console.log(data);
        data.results.forEach(element => {
          console.log(element);
          const movie: Movie = new Movie();
          movie.id = element.id;
          movie.title = element.original_title;
          movie.contentRating = element.vote_average;
          movie.imageUrl = element.poster_path;
          this._movieList.push(movie);
        });
      }
    }));
  }

  fetchUpcomingMovies(): Observable<any> {
    this._movieList = [];
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
      .pipe(map((data: any) => {
      if (data != null) {
        data.results.forEach(element => {
          console.log(element);
          const movie: Movie = new Movie();
          movie.id = element.id;
          movie.title = element.original_title;
          movie.contentRating = element.vote_average;
          movie.imageUrl = element.poster_path;
          this._movieList.push(movie);
        });
      }
    }));
  }

  fetchMovieById(id: any): Observable<any> {
    this._movie = new Movie();
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
      .pipe(map((data: any) => {
        console.log(data);
        if (data != null) {
          const movie: Movie = new Movie();
          movie.id = data.id;
          movie.title = data.original_title;
          movie.imageUrl = data.poster_path;
          movie.overview = data.overview;
          this._movie = movie;
        }
      }));
  }
}