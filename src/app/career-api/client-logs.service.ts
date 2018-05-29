import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiRequestService, UpdateProperty } from './api-request.service';
import { User } from './users.service';
import { JwtStorageService } from './jwt-storage.service';
import { Router } from '@angular/router';

export interface ClientLogsResponse {
  count: number;
  client_logs: ClientLog[];
}

export interface ClientLogResponse {
  message: string;
}

export interface ClientLog {
  _id: string;
  created: Date;
  ip: string;
  user: User;
  page: string;
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class ClientLogsService {
  private clientLogsEndpoint: string = 'client-logs/';

  constructor(
    private apiRequest: ApiRequestService,
    private jwtStorage: JwtStorageService,
    private router: Router
  ) { }

  public getClientLogs(): Observable<ClientLogsResponse> {
    return this.apiRequest.get(this.clientLogsEndpoint);
  }

  public getClientLogsByIp(ip: string): Observable<ClientLogsResponse> {
    return this.apiRequest.get(`${this.clientLogsEndpoint}${ip}`);
  }

  public createLog(message: string): void {
    let clientLog: ClientLog = { page: this.router.url, message: message } as ClientLog;
    if(this.jwtStorage.getToken()) {
      this.apiRequest.post(this.clientLogsEndpoint, clientLog).subscribe();
    } else {
      this.apiRequest.postUnauthenticated(this.clientLogsEndpoint, clientLog).subscribe();
    }
  }

  public deleteClientLogs(): Observable<ClientLogsResponse> {
    return this.apiRequest.delete(this.clientLogsEndpoint);
  }
}
