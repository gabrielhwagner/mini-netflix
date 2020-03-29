import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IMovie } from 'app/models/movies.model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.styl'],
  encapsulation: ViewEncapsulation.None,
})
export class ListMoviesComponent implements OnInit {

  @Input() title: string;
  @Input() slides: Array<IMovie>;

  slideConfig: object;

  constructor() {

    this.slideConfig = {
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: '<div tabindex="0" class="nav-slide next"></div>',
      prevArrow: '<div tabindex="0" class="nav-slide prev"></div>',
      dots: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };
  }

  ngOnInit(): void {
  }

}
