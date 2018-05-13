import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthenticationService } from '../../career-api/authentication.service';
import { JwtStorageService } from '../../career-api/jwt-storage.service';
import { User } from '../../career-api/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showNavigation: boolean = false;
  public showDropdown: boolean = false;
  public currentLang: string = 'en';
  public signedUser: User;
  public userImageUrl: string = 'assets/images/ico-user.svg';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private authentication: AuthenticationService,
    private jwtStorage: JwtStorageService
  ) { }

  ngOnInit() {
    this.currentLang = this.translate.currentLang;
    this.signedUser = this.jwtStorage.getSignedUser();
    let imageUrl = this.jwtStorage.getSignedUserImage();
    if (imageUrl ) {
      this.userImageUrl = imageUrl;
    }
  }

  onLanguageChange(value: string) {
    this.translate.use(value);
    this.toggleDropdown();
  }

  toggleNavigation() {
    this.showNavigation = !this.showNavigation;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  signout() {
    this.authentication.signout();
    this.router.navigateByUrl('/');
  }
}
