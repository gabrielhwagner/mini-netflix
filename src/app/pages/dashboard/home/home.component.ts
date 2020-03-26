import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'app/services/movies/movies.service';
import { IMoviesByCategory } from 'app/models/movies.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  listMovies: Array<IMoviesByCategory>;

  constructor(private moviesServive: MoviesService) { }

  ngOnInit(): void {

    this.searchMovies();
  }

  searchMovies() {
    this.moviesServive.searchMoviesByCategory().subscribe(
      res => this.listMovies = res
    );
  }

}
