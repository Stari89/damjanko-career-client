import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../career-api/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private users: UsersService) { }

  ngOnInit() {
    this.users.getUsers().subscribe(users => {
      console.log(users);
    });
  }

}
