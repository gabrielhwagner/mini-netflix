import { Component } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [
		trigger('routeAnimation', [

			transition('dashboard => login', [
				style({ height: '!' }),
				query(':enter', style({transform: 'translateX(-100%)'})),
				query(':enter, :leave', style({position: 'fixed', top: 0, left: 0, right: 0})),
				group([
					query(':leave', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(100%)'}))]),
					query(':enter', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(0)'}))]),
				])
			]),

			transition('login => dashboard', [
				style({ height: '!' }),
				query(':enter', style({transform: 'translateX(100%)'})),
				query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
				group([
					query(':leave', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(-100%)'}))]),
					query(':enter', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({transform: 'translateX(0)'}))]),
				])
			]),
		])
	]
})
export class AppComponent {
  title = 'mini-netflix';

  getAnimation(outlet) {
		return outlet.activatedRouteData['animation'];
	}
}
