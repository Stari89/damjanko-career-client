import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { UsersService, User } from '../../career-api/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private userId: string;
  public user: User = { role: 'user' } as User;
  public errorMessage;
  public roles = [ 'user', 'admin' ];
  public mode: string;

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.translate.get('DASHBOARD.USER.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let param = params.get('id');
      if (param)
      {
        this.mode = 'update';
        this.userId = params.get('id');
        this.usersService.getUser(this.userId).subscribe(
          userResponse => {
            this.user = userResponse.user;
          },
          error => this.errorMessage = error.message
        );
      } else {
        this.mode = 'insert';
      }
    });
  }

  onSubmit(close: boolean) {
    switch (this.mode) {
      case 'insert':
        this.usersService.createUser(this.user).subscribe(
          userResponse => {
            if (close) {
              this.router.navigateByUrl('/users');
            } else {
              this.router.navigateByUrl(`/users/${userResponse.user._id}`);
            }
          },
          error => {
            this.errorMessage = error.message;
          }
        );
        break;
      case 'update':
        this.usersService.updateUser(this.user._id, this.user).subscribe(
          userResponse => {
            if (close) {
              this.router.navigateByUrl('/users');
            }
          },
          error => {
            this.errorMessage = error.message;
          }
        );
        break;
    }
  }

  delete() {
    if (!confirm('Are you sure?')) {
      return;
    }

    this.usersService.deleteUser(this.userId).subscribe(
      userResponse => {
        this.router.navigateByUrl('/users');
      },
      error => this.errorMessage = error.message
    );
  }
}
