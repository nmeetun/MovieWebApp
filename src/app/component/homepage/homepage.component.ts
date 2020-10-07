import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import movies from 'src/app/files/movies.json';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public movie: { title:string, year:string, releaseDate:string, imdbRating: number, posterurl:string }[] = movies;
  title: string;
  searchTerm: string;

  constructor(public translate: TranslateService){
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
  }

  // Search(){
  //   if(this.title!==""){
  //     this.movie = this.movie.filter(res=>{
  //       return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
  //     });
  //   }
  //   else if(this.title==""){
  //     this.ngOnInit();
  //   }
  // }
}
