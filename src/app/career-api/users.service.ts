import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ApiRequestService } from './api-request.service';

export interface User {
  _id: string;
  name: string;
  role: string;
}

@Injectable()
export class UsersService {
  private usersEndpoint: string = 'users/';

  constructor(private apiRequest: ApiRequestService) { }

  public getUsers(): Observable<User> {
    return this.apiRequest.get(this.usersEndpoint);
  }
}
