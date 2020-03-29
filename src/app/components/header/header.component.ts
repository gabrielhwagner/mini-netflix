import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  openDropdown = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    window.localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
