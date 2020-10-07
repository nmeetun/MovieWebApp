import { DialogComponent } from './component/dialog/dialog.component';
import { MaterialModule } from './component/material/material.module';
import { browser } from 'protractor';
import { AuthGuard } from './guards/auth.guard';
import { MovieFilterPipe } from './component/homepage/movie-filter.pipe';
import { MoviesService } from './providers/movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MovieFilterPipe,
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MaterialModule 
  ],
  exports:[MovieFilterPipe],
    
  providers: [MoviesService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public translate: TranslateService){
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
 }
