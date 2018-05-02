import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { MasterBlankComponent } from './components-public/master-blank/master-blank.component';
import { MasterSignedInComponent } from './components-signed-in/master-signed-in/master-signed-in.component';
import { MasterDashboardComponent } from './components-dashboard/master-dashboard/master-dashboard.component';

@Injectable()
export class RouteAuthenticationGuardService implements CanActivate {

  constructor(private router: Router, private authentication: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.component === MasterBlankComponent) {
      return new Promise<boolean>((resolve) => resolve(true));
    }
    if (route.component === MasterSignedInComponent) {
      let promise = this.authentication.isAuthenticated()
        .then(isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigateByUrl('/sign-in');
          }
          return isAuthenticated;
        });
      return promise;
    }
    if (route.component === MasterDashboardComponent) {
      let promise = this.authentication.isAuthenticated()
        .then(isAuthenticated => {
          console.log('asdf ' + isAuthenticated);
          if (!isAuthenticated) {
            this.router.navigateByUrl('/sign-in');
            return isAuthenticated;
          }
          let promise = this.authentication.isAdminAuthenticated()
            .then(isAdminAuthenticated => {
              if (!isAdminAuthenticated) {
                this.router.navigateByUrl('/unauthorized');
              }
              return isAdminAuthenticated;
            });
          return promise;
        });
      return promise;
    }
  }
}
