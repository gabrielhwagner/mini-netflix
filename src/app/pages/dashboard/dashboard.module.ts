import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { MetricsComponent } from './metrics/metrics.component';
import { PlayMovieComponent } from './play-movie/play-movie.component';
import { ProfileComponent } from './profile/profile.component';
import { ComponentsModule } from 'app/components/components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserDataComponent } from './profile/user-data/user-data.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    MetricsComponent,
    PlayMovieComponent,
    ProfileComponent,
    UserDataComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    YouTubePlayerModule
  ],
})
export class DashboardModule { }
