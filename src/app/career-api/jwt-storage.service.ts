import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { User } from './users.service';

@Injectable()
export class JwtStorageService {
  private readonly tokenKey: string = 'damjanko_career_token';
  private token: string;
  private readonly signedUserKey: string = 'damjanko_career_signed_user';
  private signedUser: User;

  constructor() { }

  public saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.token = token;
  }

  public saveSignedUser(user: User): void {
    localStorage.setItem(this.signedUserKey, JSON.stringify(user));
    this.signedUser = user;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem(this.tokenKey);
    }
    return this.token;
  }

  public getSignedUser(): User {
    if (!this.signedUser) {
      this.signedUser = JSON.parse(localStorage.getItem(this.signedUserKey)) as User;
    }
    return this.signedUser;
  }

  public destroyToken(): void {
    this.token = null;
    localStorage.removeItem(this.tokenKey);
  }

  public destroySignedUser(): void {
    this.signedUser = null;
    localStorage.removeItem(this.signedUserKey);
  }

  public getSignedUserImage(): string {
    if (!this.getSignedUser().userImagePath) {
      return null;
    }
    return environment.careerApiEndpointUrl + 'uploads/' + this.getSignedUser().userImagePath;
  }
}
