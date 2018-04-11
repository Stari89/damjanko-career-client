import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class RouteAuthenticationGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    var isLoggedIn = true; /* TODO: this.authenticationService.isLoggedIn() */
    if (isLoggedIn) {
      return true;
    }
    this.router.navigateByUrl('/sign-in');
    return false;
  }
}
