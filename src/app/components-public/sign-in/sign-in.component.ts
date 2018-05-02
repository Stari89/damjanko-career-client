import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';

/* services */
import { AuthenticationService } from '../../career-api/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  password: string;

  constructor(private titleService:Title, private router: Router, private authentication: AuthenticationService) {
    this.titleService.setTitle("Sign In - carrer.DamjanKo");
  }

  ngOnInit() {
  }

  signin() {
    this.authentication.authenticate(this.password)
      .then(authenticated => {
        if (authenticated) {
          this.router.navigateByUrl('/');
        } else {

        }
      });
  }

}
