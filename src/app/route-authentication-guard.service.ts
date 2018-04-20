import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class RouteAuthenticationGuardService implements CanActivate {

  constructor(private router: Router, private authentication: AuthenticationService) { }

  canActivate() {
     let promise = this.authentication.isAuthenticated()
      .then(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigateByUrl('/sign-in');
        }
        return isAuthenticated;
      });
    return promise;
  }
}
