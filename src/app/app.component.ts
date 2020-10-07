import { Component } from '@angular/core';
import movies from 'src/app/files/movies.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoviesWebApp';

  public movie: { title:string, year:string, releaseDate:string, imdbRating: number, posterurl:string }[] = movies;

  constructor() { 
  }

  ngOnInit(): void {
  }
}

