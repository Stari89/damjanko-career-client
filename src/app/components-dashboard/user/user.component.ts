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
  private userImage: File;
  public user: User = { role: 'user' } as User;
  public errorMessage;
  public successMessage;
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

  onUserImageChange(files: FileList) {
    this.userImage = files.item(0);
  }

  onSubmit(close: boolean) {
    switch (this.mode) {
      case 'insert':
        this.usersService.createUser(this.user).subscribe(
          userResponse => {
            if (this.userImage) {
              this.usersService.updateUserImage(userResponse.user._id, this.userImage).subscribe(
                response => {
                  if (close) {
                    this.router.navigateByUrl('/users');
                  } else {
                    this.router.navigateByUrl(`/users/${userResponse.user._id}`);
                    this.successMessage = response.message;
                  }
                },
                error => {
                  this.errorMessage = error.message;
                }
              );
            } else {
              if (close) {
                this.router.navigateByUrl('/users');
              } else {
                this.router.navigateByUrl(`/users/${userResponse.user._id}`);
                this.successMessage = userResponse.message;
              }
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
            if (this.userImage) {
              this.usersService.updateUserImage(this.user._id, this.userImage).subscribe(
                response => {
                  if (close) {
                    this.router.navigateByUrl('/users');
                  } else {
                    this.successMessage = response.message;
                  }
                },
                error => {
                  this.errorMessage = error.message;
                }
              );
            } else {
              if (close) {
                this.router.navigateByUrl('/users');
              } else {
                this.successMessage = userResponse.message;
              }
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
