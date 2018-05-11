import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { UsersService, User } from '../../career-api/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[];
  private errorMessage;

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.translate.get('DASHBOARD.USERS.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    this.usersService.getUsers().subscribe(
      usersResponse => {
        this.users = usersResponse.users;
      },
      error => this.errorMessage = error
    );
  }

}
