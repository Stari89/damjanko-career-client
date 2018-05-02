import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

export interface TokenResponse {
  message: string;
  token: string;
}

@Injectable()
export class AuthenticationService {
  private readonly tokenKey: string = 'damjanko_career_token';
  private token: string;
  private authenticationEndpoint: string = `${environment.careerApiEndpointUrl}authentication/`;
  private isAdminEndpoint: string = `${environment.careerApiEndpointUrl}authentication/is-admin/`;

  constructor(private http: HttpClient, private router: Router) { }

  public authenticate(password: string): Promise<boolean> {
    let promise = new Promise<boolean>(resolve => {
      this.http.post<TokenResponse>(this.authenticationEndpoint, { "password": password })
        .toPromise()
        .then(
          res => {
            this.saveToken(res.token);
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
    let token = this.getToken();
    if (!token) {
      return new Promise<boolean>(resolve => resolve(false));
    }
    let promise = new Promise<boolean>(resolve => {
      this.http.get(this.authenticationEndpoint, { headers: { Authorization: `Bearer ${this.getToken()}` }})
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
    let token = this.getToken();
    if (!token) {
      return new Promise<boolean>(resolve => resolve(false));
    }
    let promise = new Promise<boolean>(resolve => {
      this.http.get(this.isAdminEndpoint, { headers: { Authorization: `Bearer ${this.getToken()}` }})
        .toPromise()
        .then(
          res => {
            console.log(res);
            resolve(true);
          },
          err => {
            console.log(err);
            resolve(false);
          });
    });
    return promise;
  }

  public signout(): void {
    this.destroyToken();
  }

  private saveToken(token: string): void {
    console.log(token);
    localStorage.setItem(this.tokenKey, token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem(this.tokenKey);
    }
    return this.token;
  }

  private destroyToken(): void {
    this.token = null;
    localStorage.removeItem(this.tokenKey);
  }
}
