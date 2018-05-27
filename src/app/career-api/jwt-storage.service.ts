import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { User } from './users.service';
import { Application } from './applications.service';

@Injectable()
export class JwtStorageService {
  private readonly tokenKey: string = 'damjanko_career_token';
  private token: string;
  private readonly signedUserKey: string = 'damjanko_career_signed_user';
  private signedUser: User;
  private readonly userApplicationKey: string = 'damjanko_career_user_application';
  private userApplication: Application;

  constructor() { }

  public saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.token = token;
  }

  public saveSignedUser(user: User): void {
    localStorage.setItem(this.signedUserKey, JSON.stringify(user));
    this.signedUser = user;
  }

  public saveUserApplication(application: Application): void {
    localStorage.setItem(this.userApplicationKey, JSON.stringify(application));
    this.userApplication = application;
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

  public getUserApplication(): Application {
    if (!this.userApplication) {
      this.userApplication = JSON.parse(localStorage.getItem(this.userApplicationKey)) as Application;
    }
    return this.userApplication;
  }

  public destroyToken(): void {
    this.token = null;
    localStorage.removeItem(this.tokenKey);
  }

  public destroySignedUser(): void {
    this.signedUser = null;
    localStorage.removeItem(this.signedUserKey);
  }

  public destroyUserApplication(): void {
    this.userApplication = null;
    localStorage.removeItem(this.userApplicationKey);
  }

  public getSignedUserImage(): string {
    if (!this.getSignedUser().userImagePath) {
      return null;
    }
    return environment.careerApiEndpointUrl + 'uploads/' + this.getSignedUser().userImagePath;
  }
}
