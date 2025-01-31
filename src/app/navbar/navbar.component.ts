import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    public router: Router
    ) {}


  reloadPage(route: string) {
    const currentRoute = this.router.url;
    if (currentRoute === route) {
      window.location.reload();
    }
  }
}
