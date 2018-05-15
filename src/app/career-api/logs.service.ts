import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiRequestService, UpdateProperty } from './api-request.service';

import { User } from './users.service';

export interface LogsResponse {
  count: number;
  logs: Log[];
}

export interface Log {
  _id: string;
  created: Date;
  user: User;
  endpoint: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private logsEndpoint: string = 'logs/';

  constructor(private apiRequest: ApiRequestService) { }

  public getLogs(): Observable<LogsResponse> {
    return this.apiRequest.get(this.logsEndpoint);
  }

  public getLogsByUser(userId: string): Observable<LogsResponse> {
    return this.apiRequest.get(`${this.logsEndpoint}${userId}/`);
  }

  public deleteLogs(): Observable<LogsResponse> {
    return this.apiRequest.delete(this.logsEndpoint);
  }
}
