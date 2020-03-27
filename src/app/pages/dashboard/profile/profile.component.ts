import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'app/services/movies/movies.service';
import { IMovie } from 'app/models/movies.model';
import { AuthService } from 'app/services/auth/auth.service';
import { IUser } from 'app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.styl']
})
export class ProfileComponent implements OnInit {

  movies: Array<IMovie>;
  user: IUser;

  constructor(
    private moviesService: MoviesService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.searchMoviesTopWatchedByUser();
    this.searchUserInformation();
  }
  
  searchMoviesTopWatchedByUser() {
    this.moviesService.searchMoviesTopWatchedByUser().subscribe(
      res => this.movies = res
    );
  }

  searchUserInformation() {
    this.authService.searchUserInformation().subscribe(
      res => this.user = res
    );
  }
}
