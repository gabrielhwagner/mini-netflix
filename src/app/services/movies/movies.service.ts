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

  /*
    Returns an array of categories with the movies
  */
  searchMoviesByCategory(): Observable<IMoviesByCategory[]> {
    return new Observable((observer) => {
      const data = this.mergeCategoryAndMovie();

      return observer.next(data);
    });
  }

  /*
   Returns an array of movies based on the number of views 
   defined in the mock plus the views of application users
  */
  searchMoviesTopWatched(): Observable<IMovie[]> {
    return new Observable((observer) => {
      const listMovies = getMovies();
      const movies = this.searchWatchedMovies(listMovies);
      const sort = this.sortMovieByWatched(movies, 8);
      return observer.next(sort);
    });
  }

  /*
    Returns an array of categories with your movies with the largest
    number of views defined in the mock plus the views of the users
    of the application
  */
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

  /*
    Returns an array of movies most viewed by the user,
    the information is stored in localstorage
  */
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

  /*
    Add +1 preview there is a movie on the user object saved on localstorage
  */
  addMovieWatch(idMovie: number): Observable<{}> {
    return new Observable((observer) => {
      const { id: idUser } = JSON.parse(window.localStorage.getItem('user'));
      let usersData = JSON.parse(window.localStorage.getItem('usersData'));

      if (!usersData) usersData = []

      let indexUser = usersData.findIndex(user => user.idUser === idUser);

      if (indexUser === -1) {
        usersData.push({
          idUser,
          movies: [],
        });

        indexUser = usersData.length - 1;
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

  /*
    Search the categories and your movies
  */
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

  /*
    Receive a list of films and sort by the number of views
  */
  sortMovieByWatched(movies: Array<IMovie>, numberMovies: number): Array<IMovie> {
    movies.sort((a, b) => b.watchedNumber - a.watchedNumber);
    const list = movies.splice(0, numberMovies);
    return list;
  }

  /*
    Return for the information of a movie
  */
  searchDetailMovie(id: number): IMovie {
    const movies = getMovies();
    return movies.find(movie => movie.id === id);
  }

  /*
    Calculate the number of views of a movie, adding the number of
    views of the mock and users
  */
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

  /*
    Search the number of times users viewed a movie
  */
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
