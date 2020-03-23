import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MetricsComponent } from './metrics/metrics.component';
import { PlayMovieComponent } from './play-movie/play-movie.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [HomeComponent, MetricsComponent, PlayMovieComponent, ProfileComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
