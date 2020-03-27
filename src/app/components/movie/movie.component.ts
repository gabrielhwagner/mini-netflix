import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IMovie } from 'app/models/movies.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.styl']
})
export class MovieComponent implements OnInit {

  @Input() movie: IMovie;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickMovie() {
    this.router.navigate([`/play-movie/${this.movie.id}`]);
  }
}
