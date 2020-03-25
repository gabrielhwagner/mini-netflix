import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    ListMoviesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    ListMoviesComponent,
  ]
})
export class ComponentsModule { }
