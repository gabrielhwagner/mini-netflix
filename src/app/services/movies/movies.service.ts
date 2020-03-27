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
      const listMovies = getMovies();
      const movies = this.searchWatchedMovies(listMovies);
      const sort = this.sortMovieByWatched(movies, 8);
      return observer.next(sort);
    });
  }

  searchMoviesTopWatchedByCategory(): Observable<IMoviesByCategory[]> {
    return new Observable((observer) => {
      const categories = this.mergeCategoryAndMovie();

      const sort = categories.map(category => {
        const moviesWatched = this.searchWatchedMovies(category.movies);
        const movies = this.sortMovieByWatched(moviesWatched, 6);

        return {
          id: null,
          name: category.name,
          movies,
        };
      });

      return observer.next(sort);
    });
  }

  searchMoviesTopWatchedByUser(): Observable<IMovie[]> {
    return new Observable((observer) => {
      const { id: idUser } = JSON.parse(window.localStorage.getItem('user'));
      const usersData = JSON.parse(window.localStorage.getItem('usersData'));

      if (!usersData) {
        return observer.next([]);
      }

      const userData = usersData.find(user => user.idUser === idUser);

      if (!userData || userData.movies.length === 0) {
        return observer.next([]);
      }

      const sort = this.sortMovieByWatched(userData.movies, 5);
      const data = sort.map(movie => {
        const detail = this.searchDetailMovie(movie.id);

        return {
          ...detail,
          watchedNumber: movie.watchedNumber
        };
      });
      return observer.next(data);
    });
  }

  addMovieWatch(idMovie: number): Observable<{}> {
    return new Observable((observer) => {
      const { id: idUser } = JSON.parse(window.localStorage.getItem('user'));
      let usersData = JSON.parse(window.localStorage.getItem('usersData'));

      if (!usersData) {
        usersData = [{
          idUser,
          movies: [],
        }];
      }

      const indexUser = usersData.findIndex(user => user.idUser === idUser);

      if (indexUser === -1) {
        usersData.push({
          idUser,
          movies: [{
            id: idMovie,
            watchedNumber: 1,
          }],
        });
        window.localStorage.setItem('usersData', JSON.stringify(usersData));
        return observer.next({});
      }

      const movieIndex = usersData[indexUser].movies
        .findIndex(movie => movie.id === idMovie);

      if (movieIndex === -1) {
        usersData[indexUser].movies.push({ id: idMovie, watchedNumber: 1 });
      } else {
        usersData[indexUser].movies[movieIndex].watchedNumber++;
      }

      window.localStorage.setItem('usersData', JSON.stringify(usersData));

      return observer.next({});
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

  searchDetailMovie(id: number): IMovie {
    const movies = getMovies();
    return movies.find(movie => movie.id === id);
  }

  searchWatchedMovies(listMovies: IMovie[]): IMovie[] {
    const movies = listMovies.map(movie => {
      const { watchedNumber, id } = movie;
      const watchedNumberUser = this.searchWatchedMovieByUsers(id);
      return {
        ...movie,
        watchedNumber: watchedNumber + watchedNumberUser
      };
    });
    return movies;
  }

  searchWatchedMovieByUsers(idMovie: number): number {
    const usersData = JSON.parse(window.localStorage.getItem('usersData'));
    if (!usersData) { return 0; }

    let numberWatcher = 0;

    usersData.forEach(user => {
      const movie = user.movies.find(({ id }) => id === idMovie);
      if (movie) { return numberWatcher += movie.watchedNumber; }
    });

    return numberWatcher;
  }
}
