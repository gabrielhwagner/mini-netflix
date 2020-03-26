import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MetricsComponent } from './metrics/metrics.component';
import { PlayMovieComponent } from './play-movie/play-movie.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginGuard } from '../login/login.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'top-watched',
        component: MetricsComponent,
      },
      {
        path: 'play-movie/:id',
        component: PlayMovieComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
