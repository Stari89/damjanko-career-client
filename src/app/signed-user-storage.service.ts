import { Injectable } from '@angular/core';

export interface SignedUser {
  _id: string;
  name: string;
  role: string;
  created: Date;
  updated: Date;

  localization: string;
  avatarImage: string;
  fullName: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignedUserStorageService {
  private readonly signedUserKey: string = 'signed-user';
  private signedUser: SignedUser;

  constructor() { }

  public getLocalization(): string {
    return this.getSignedUser().localization;
  }

  public setLocalization(localization: string): void {
    this.getSignedUser().localization = localization;
  }

  public getSignedUser(): SignedUser {
    if (!this.signedUser) {
      this.signedUser = JSON.parse(localStorage.getItem(this.signedUserKey)) as SignedUser;
    }
    return this.signedUser;
  }

  public setSignedUser(signedUser: SignedUser): void {
    localStorage.setItem(this.signedUserKey, JSON.stringify(signedUser));
    this.signedUser = signedUser;
  }

  public destroySignedUser(): void {
    this.signedUser = null;
    localStorage.removeItem(this.signedUserKey);
  }
}
