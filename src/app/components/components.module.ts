import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ParentalRatingComponent } from './parental-rating/parental-rating.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    ListMoviesComponent,
    MovieComponent,
    ParentalRatingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    ListMoviesComponent,
    MovieComponent,
    ParentalRatingComponent
  ]
})
export class ComponentsModule { }
