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
  fullName: string;
  address: string;
  password: string;
  userImagePath: string;
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
    if (user.fullName) {
      data.push( { propName: 'fullName', value: user.fullName });
    }
    if (user.address) {
      data.push( { propName: 'address', value: user.address });
    }
    return this.apiRequest.patch(`${this.usersEndpoint}${userId}/`, data);
  }

  public updateUserImage(userId: string, userImage: File): Observable<UserResponse> {
    let formData: FormData = new FormData();
    formData.append('userImage', userImage);
    return this.apiRequest.put(`${this.usersEndpoint}${userId}/`, formData)
  }

  public deleteUser(userId: string): Observable<UserResponse> {
    return this.apiRequest.delete(`${this.usersEndpoint}${userId}/`);
  }
}
