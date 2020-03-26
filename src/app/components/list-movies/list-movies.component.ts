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
  // TODO breakpoint
  slideBreakpoints: object;

  constructor() {

    this.slideConfig = {
      slidesToShow: 5,
      slidesToScroll: 4,
      nextArrow: '<div tabindex="0" class="nav-slide next"></div>',
      prevArrow: '<div tabindex="0" class="nav-slide prev"></div>',
      dots: false,
      infinite: false,
    };
  }

  ngOnInit(): void {
  }
}
