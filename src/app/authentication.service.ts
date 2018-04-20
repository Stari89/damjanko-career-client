import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

export interface TokenResponse {
  message: string;
  token: string;
}

@Injectable()
export class AuthenticationService {
  private readonly tokenKey: string = 'damjanko_career_token';
  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  public authenticate(password: string): Promise<boolean> {
    let promise = new Promise<boolean>(resolve => {
      this.http.post<TokenResponse>(`http://localhost:3001/authentication/`, { "password": password })
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
      return new Promise<boolean>((resolve) => resolve(false));
    }
    let promise = new Promise<boolean>(resolve => {
      this.http.get(`http://localhost:3001/authentication/`, { headers: { Authorization: `Bearer ${this.getToken()}` }})
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

  private saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem(this.tokenKey);
    }
    return this.token;
  }
}
