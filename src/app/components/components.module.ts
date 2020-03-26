import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    ListMoviesComponent,
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
    InputComponent,
    HeaderComponent,
    ListMoviesComponent,
  ]
})
export class ComponentsModule { }
