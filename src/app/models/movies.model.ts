export interface IMovie {
  id: number;
  name: string;
  rating: string;
  cover: string;
  synopsis: string;
  year: number;
  watchedNumber: number;
  categoryId: number;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IMoviesByCategory extends ICategory {
  movies: Array<IMovie>;
}

export interface IListMovies {
  title: string;
  movies: Array<IMovie>;
}
