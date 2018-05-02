import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../career-api/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show:boolean = false;

  constructor(private router: Router, private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  toggleNavigation()
  {
    this.show = !this.show;
  }

  signout() {
    this.authentication.signout();
    this.router.navigateByUrl('/');
  }
}
