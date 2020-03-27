import { Component, OnInit, Input } from '@angular/core';
import { ParentalRating } from './parental-rating.contants';

@Component({
  selector: 'app-parental-rating',
  templateUrl: './parental-rating.component.html',
  styleUrls: ['./parental-rating.component.styl']
})
export class ParentalRatingComponent implements OnInit {

  @Input() rating: ParentalRating;
  ParentalRating = ParentalRating;
  
  constructor() { }

  ngOnInit(): void {
  }

}
