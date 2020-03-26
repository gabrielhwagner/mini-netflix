import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getCategories } from 'app/mocks/categories';
import { getMovies } from 'app/mocks/movies';
import { IMoviesByCategory, IMovie } from 'app/models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  searchMoviesByCategory(): Observable<IMoviesByCategory[]> {
    return new Observable((observer) => {
      const data = this.mergeCategoryAndMovie();

      return observer.next(data);
    });
  }

  searchMoviesTopWatched(): Observable<IMovie[]> {
    return new Observable((observer) => {
      const movies = getMovies();
      const sort = this.sortMovieByWatched(movies, 8);
      return observer.next(sort);
    });
  }

  searchMoviesTopWatchedByCategory(): Observable<IMoviesByCategory[]> {
    return new Observable((observer) => {
      const categories = this.mergeCategoryAndMovie();

      const sort = categories.map(category => {
        const movies = this.sortMovieByWatched(category.movies, 6);

        return {
          id: null,
          name: category.name,
          movies,
        };
      });

      return observer.next(sort);
    });
  }

  mergeCategoryAndMovie(): Array<IMoviesByCategory> {
    const categories = getCategories();
    const movies = getMovies();

    const data = categories.map(category => {
      const listMovies = movies
        .filter(movie => movie.categoryId === category.id);

      return {
        ...category,
        movies: listMovies,
      };
    });

    return data;
  }

  sortMovieByWatched(movies: Array<IMovie>, numberMovies: number): Array<IMovie> {
    movies.sort((a, b) => b.watchedNumber - a.watchedNumber);
    const list = movies.splice(0, numberMovies);
    return list;
  }
}
