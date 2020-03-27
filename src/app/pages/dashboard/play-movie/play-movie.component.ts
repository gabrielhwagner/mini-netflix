import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'app/services/movies/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.styl']
})
export class PlayMovieComponent implements OnInit {

  constructor(
    private moviesServive: MoviesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.addNumberOfViews(Number(id));
  }

  addNumberOfViews(id: number) {
    this.moviesServive.addMovieWatch(id).subscribe(
      res => {
        
      }
    );
  }
}
