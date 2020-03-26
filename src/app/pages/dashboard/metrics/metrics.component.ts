import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'app/services/movies/movies.service';
import { IListMovies, IMoviesByCategory } from 'app/models/movies.model';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.styl']
})
export class MetricsComponent implements OnInit {

  constructor(private moviesServive: MoviesService) { }

  listMovies: Array<IMoviesByCategory> = [];

  ngOnInit(): void {
    this.searchMoviesTopWatched();
    this.searchMoviesTopWatchedByCategory();
  }

  searchMoviesTopWatched() {
    this.moviesServive.searchMoviesTopWatched().subscribe(
      res => {
        const list = {
          id: null,
          name: 'Top filmes mais assistidos',
          movies: res,
        };
        this.listMovies.unshift(list);
      }
    );
  }

  searchMoviesTopWatchedByCategory() {
    this.moviesServive.searchMoviesTopWatchedByCategory().subscribe(
      res => {
        this.listMovies = [
          ...this.listMovies,
          ...res
        ];
      }
    );
  }
}
