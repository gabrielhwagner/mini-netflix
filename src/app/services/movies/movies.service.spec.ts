import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { getMovies } from 'app/mocks/movies';
 
describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Check functions', () => {
    describe('searchMoviesByCategory()', () => {
      const mockMoviesByCategory = [
        {
          id: 1,
          name: 'Teste',
          movies: []
        }
      ];

      it('must return a list of categories and their films', () => {
        spyOn(service, 'mergeCategoryAndMovie')
          .and.returnValue(mockMoviesByCategory);
        
        service.searchMoviesByCategory().subscribe(res => {
          expect(service.mergeCategoryAndMovie).toHaveBeenCalled();
          expect(res).toEqual(mockMoviesByCategory);
        })
      })
    });

    describe('searchMoviesTopWatched()', () => {

      const movies = [
        {
          id: 1,
          name: 'WALL-E',
          rating: 'LIVRE',
          cape: 'assets/images/movies/animations/wall-e.jpeg',
          synopsis: `synopsis`,
          year: 2008,
          watchedNumber: 5,
          categoryId: 1,
        },
      ];

      beforeEach(() => {
        spyOn(service, 'searchWatchedMovies')
          .and.returnValue(movies);
  
        spyOn(service, 'sortMovieByWatched')
          .and.returnValue(movies);
      })

      it('must return a list of the 8 most viewed films', () => {
        
        service.searchMoviesTopWatched().subscribe(res => {
          expect(res).toEqual(movies);
          expect(service.searchWatchedMovies).toHaveBeenCalledWith(getMovies());
          expect(service.sortMovieByWatched).toHaveBeenCalledWith(movies, 8)
        })
      })
    });
  });
});
