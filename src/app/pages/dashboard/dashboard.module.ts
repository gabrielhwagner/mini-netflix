import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { MetricsComponent } from './metrics/metrics.component';
import { PlayMovieComponent } from './play-movie/play-movie.component';
import { ProfileComponent } from './profile/profile.component';
import { ComponentsModule } from 'app/components/components.module';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    MetricsComponent,
    PlayMovieComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
