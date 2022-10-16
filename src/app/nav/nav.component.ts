import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ServiceRequest () {
    return this.authService.isLoggedIn()
  }

  Try () {
    return this.authService.isLoggedIn() && this.authService.isServicemen()
  }

  Logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
