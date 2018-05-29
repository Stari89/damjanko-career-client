import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

/* services */
import { AuthenticationService } from '../../career-api/authentication.service';
import { ClientLogsService } from '../../career-api/client-logs.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public password: string;
  public showErrorMessage: boolean = false;
  public currentLang: string = 'en';

  constructor (
    private translate: TranslateService,
    private titleService: Title,
    private router: Router,
    private authentication: AuthenticationService,
    private clientLogsService: ClientLogsService
  ) {  }

  ngOnInit() {
    this.currentLang = this.translate.currentLang;
    this.translate.get('PUBLIC.SIGN-IN.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
    this.clientLogsService.createLog('Inited page');
  }

  signin() {
    this.clientLogsService.createLog('Clicked sign-in button');
    this.authentication.authenticate(this.password)
      .then(authenticated => {
        if (authenticated) {
          this.clientLogsService.createLog('Sign-in success');
          this.router.navigateByUrl('/');
        } else {
          this.clientLogsService.createLog('Sign-in failed');
          this.showErrorMessage = true;
        }
      })
      .catch(error => {
        this.clientLogsService.createLog('Sign-in failed');
        this.showErrorMessage = true;
      });
  }

  onLanguageChange(value: string) {
    this.clientLogsService.createLog('Changed language');
    this.translate.use(value);
  }
}
