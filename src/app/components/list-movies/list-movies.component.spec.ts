import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ListMoviesComponent } from './list-movies.component';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoviesComponent ],
      imports: [
        SlickCarouselModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    component.title = 'Test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Check view content', () => {
    it('must contain an h2 with title', () => {
      let h2 = fixture.debugElement.query(By.css('h2'));

      expect(h2).toBeTruthy();
      expect(h2.nativeElement.innerText).toContain('Test');
    });

    it('must contain ngx-slick-carousel', () => {
      let wrapper = fixture.debugElement.query(By.css('ngx-slick-carousel'));

      expect(wrapper).toBeTruthy();
    });
  });
});
