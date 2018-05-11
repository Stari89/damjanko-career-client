import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiRequestService } from './api-request.service';
import { JwtStorageService } from './jwt-storage.service';

export interface TokenResponse {
  message: string;
  token: string;
}

@Injectable()
export class AuthenticationService {
  private authenticationEndpoint: string = 'authentication/';
  private isAdminEndpoint: string = 'authentication/is-admin/';

  constructor(private apiRequest: ApiRequestService, private jwtStorage: JwtStorageService, private router: Router) { }

  public authenticate(password: string): Promise<boolean> {
    let promise = new Promise<boolean>(resolve => {
      this.apiRequest.postUnauthenticated<TokenResponse>(this.authenticationEndpoint, { "password": password })
        .toPromise()
        .then(
          res => {
            this.jwtStorage.saveToken(res.token);
            resolve(true);
          },
          err =>{
            resolve(false);
          }
        );
    });
    return promise;
  }

  public isAuthenticated(): Promise<boolean> {
    let token = this.jwtStorage.getToken();
    if (!token) {
      return new Promise<boolean>(resolve => resolve(false));
    }
    let promise = new Promise<boolean>(resolve => {
      this.apiRequest.get(this.authenticationEndpoint)
        .toPromise()
        .then(
          res => {
            resolve(true);
          },
          err => {
            resolve(false);
          });
    });
    return promise;
  }

  public isAdminAuthenticated(): Promise<boolean> {
    let token = this.jwtStorage.getToken();
    if (!token) {
      return new Promise<boolean>(resolve => resolve(false));
    }
    let promise = new Promise<boolean>(resolve => {
      this.apiRequest.get(this.isAdminEndpoint)
        .toPromise()
        .then(
          res => {
            resolve(true);
          },
          err => {
            resolve(false);
          });
    });
    return promise;
  }

  public signout(): void {
    this.jwtStorage.destroyToken();
  }
}
