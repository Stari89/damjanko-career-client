import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

/* services */
import { AuthenticationService } from '../../career-api/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public password: string;
  public showErrorMessage: boolean = false;

  constructor (
    private translate: TranslateService,
    private titleService: Title,
    private router: Router,
    private authentication: AuthenticationService
  ) {  }

  ngOnInit() {
    this.translate.get('PUBLIC.SIGN-IN.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

  signin() {
    this.authentication.authenticate(this.password)
      .then(authenticated => {
        if (authenticated) {
          this.router.navigateByUrl('/');
        } else {
          this.showErrorMessage = true;
        }
      })
      .catch(error => {
        this.showErrorMessage = true;
      });
  }

}
