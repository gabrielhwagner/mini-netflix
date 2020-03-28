import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'app/services/movies/movies.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'app/models/movies.model';

@Component({
  selector: 'app-play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.styl']
})
export class PlayMovieComponent implements OnInit {

  movie: IMovie;
  
  constructor(
    private moviesServive: MoviesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.startYoutubeScript();
    this.addNumberOfViews(Number(id));
    this.searchDetailMovie(Number(id));
  }

  startYoutubeScript() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  addNumberOfViews(id: number) {
    this.moviesServive.addMovieWatch(id).subscribe();
  }

  searchDetailMovie(id: number) {
    this.movie = this.moviesServive.searchDetailMovie(id);
  }
}
