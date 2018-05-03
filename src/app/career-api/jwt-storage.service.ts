import { Injectable } from '@angular/core';

@Injectable()
export class JwtStorageService {
  private readonly tokenKey: string = 'damjanko_career_token';
  private token: string;

  constructor() { }

  public saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.token = token;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem(this.tokenKey);
    }
    return this.token;
  }

  public destroyToken(): void {
    this.token = null;
    localStorage.removeItem(this.tokenKey);
  }
}
