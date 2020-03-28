import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let mockRouter;

  const mockMovie = {
    id: 1,
    name: 'name',
    rating: 'rating1',
    cape: 'cape',
    synopsis: `Lorem ipsum`,
    year: 2008,
    watchedNumber: 5,
    categoryId: 1,
  };

  beforeEach(async(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    }

    TestBed.configureTestingModule({
      declarations: [ MovieComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;

    component.movie = mockMovie;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Check view content', () => {
    it('must contain an image with the film properties', () => {
      let img = fixture.debugElement.query(By.css('img'));

      expect(img).toBeTruthy();
      expect(img.nativeElement.alt).toEqual(mockMovie.name);
      expect(img.nativeElement.src).toContain(mockMovie.cape);
    });

    it('must contain an h4 with movie name', () => {
      let h4 = fixture.debugElement.query(By.css('h4'));

      expect(h4).toBeTruthy();
      expect(h4.nativeElement.innerText).toContain(mockMovie.name.toUpperCase());
    });

    it('must contain the app-parental-rating with the properties', () => {
      let wrapper = fixture.debugElement.query(By.css('app-parental-rating'));

      expect(wrapper).toBeTruthy();
      expect(wrapper.properties.rating).toEqual(mockMovie.rating);
    });
  });

  describe('Check actions', () => {
    it('must execute the function when clicking on the component', () => {
      spyOn(component, 'onClickMovie');

      let wrapper = fixture.debugElement
        .query(By.css('[data-component="movie"]')).nativeElement;

      wrapper.dispatchEvent(new Event('click'));

      expect(component.onClickMovie).toHaveBeenCalled();
    });
  });

  describe('Check functions', () => {
    it('onClickMovie()', () => {
      component.onClickMovie();
      
      expect(mockRouter.navigate)
        .toHaveBeenCalledWith([`/play-movie/${mockMovie.id}`]);
    });
  });
});
