import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(private router: Router) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		const user = window.localStorage.getItem('user');

		if (state.url.includes('login') && user) {

			this.router.navigate(['']);
			return false;

		} else if (state.url.includes('login') && !user) {

			return true;

		} else if (user) {

			return true;

		} else {
			this.router.navigate(['login']);
			return false;

		}

	}
}
