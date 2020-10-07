import { DialogComponent } from './component/dialog/dialog.component';
import { MoviedetailsComponent } from './component/moviedetails/moviedetails.component';
import { MovieFilterPipe } from './component/homepage/movie-filter.pipe';
import { AuthGuard } from './guards/auth.guard';
import { UpcomingmoviesComponent } from './component/upcomingmovies/upcomingmovies.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { PopularmoviesComponent } from './component/popularmovies/popularmovies.component';
import { HeaderComponent } from './component/header/header.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'header', component:HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path:'homepage', component:HomepageComponent },
  { 
    path:'popularmovies', component: PopularmoviesComponent, canActivate: [AuthGuard],
    children:[
      { path:'', component:DialogComponent}
    ] 
  },
  { path:'upcomingmovies', component:UpcomingmoviesComponent, canActivate: [AuthGuard] },
  { path:'footer', component:FooterComponent },
  { path:'moviedetails', component: MoviedetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [
  HeaderComponent,
  FooterComponent,
  HomepageComponent,
  PopularmoviesComponent,
  UpcomingmoviesComponent,
  LoginComponent,
  MoviedetailsComponent,
  DialogComponent
];
