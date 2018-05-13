import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthenticationService } from '../../career-api/authentication.service';
import { SignedUserStorageService, SignedUser } from '../../signed-user-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showNavigation: boolean = false;
  public showDropdown: boolean = false;
  public currentLang: string = 'en';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private authentication: AuthenticationService,
    private signedUserStorage: SignedUserStorageService
  ) { }

  ngOnInit() {
    this.currentLang = this.translate.currentLang;
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
