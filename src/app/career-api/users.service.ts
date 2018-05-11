import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiRequestService, UpdateProperty } from './api-request.service';

export interface UsersResponse {
  count: number;
  users: User[];
}

export interface UserResponse {
  message: string;
  user: User;
}

export interface User {
  _id: string;
  name: string;
  role: string;
  created: Date;
  updated: Date;
  password: string;
}

@Injectable()
export class UsersService {
  private usersEndpoint: string = 'users/';

  constructor(private apiRequest: ApiRequestService) { }

  public getUsers(): Observable<UsersResponse> {
    return this.apiRequest.get(this.usersEndpoint);
  }

  public getUser(userId: string): Observable<UserResponse> {
    return this.apiRequest.get(`${this.usersEndpoint}${userId}/`);
  }

  public createUser(user: User): Observable<UserResponse> {
    return this.apiRequest.post(this.usersEndpoint, user);
  }

  public updateUser(userId: string, user: User): Observable<UserResponse> {
    let data: UpdateProperty[] = [
      { propName: 'name', value: user.name },
      { propName: 'role', value: user.role }
    ]
    if (user.password) {
      data.push( { propName: 'password', value: user.password });
    }
    return this.apiRequest.patch(`${this.usersEndpoint}${userId}/`, data);
  }

  public deleteUser(userId: string): Observable<UserResponse> {
    return this.apiRequest.delete(`${this.usersEndpoint}${userId}/`);
  }
}
