import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../career-api/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[];
  private errorMessage;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      usersResponse => {
        this.users = usersResponse.users;
      },
      error => this.errorMessage = error
    );
  }

}
