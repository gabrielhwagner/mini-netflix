import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentalRatingComponent } from './parental-rating.component';

describe('ParentalRatingComponent', () => {
  let component: ParentalRatingComponent;
  let fixture: ComponentFixture<ParentalRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentalRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentalRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
