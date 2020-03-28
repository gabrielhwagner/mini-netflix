import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './pages/login/login.guard'; 
const routes: Routes = [
  {
		path: '',
		loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',
		canActivate: [LoginGuard],
		data: {
			animation: 'dashboard'
		}
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [LoginGuard],
		data: {
			animation: 'login',
		}
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
