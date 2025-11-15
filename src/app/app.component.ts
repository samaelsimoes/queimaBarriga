import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentYear = new Date().getFullYear;

  isDashboardPage = false;

  constructor(private router: Router) {
     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isDashboardPage = event.url.includes('/dashboard');
      }
    });
  }
}
