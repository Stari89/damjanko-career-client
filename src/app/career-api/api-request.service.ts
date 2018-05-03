import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JwtStorageService } from './jwt-storage.service';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiRequestService {
  private careerApiEndpointUrl: string = environment.careerApiEndpointUrl;

  constructor(private http: HttpClient, private jwtStorage: JwtStorageService) { }

  /* Authenticated requests */

  public get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(
      this.getCompleteEndpointUrl(endpoint),
      {
        headers: { Authorization: `Bearer ${this.jwtStorage.getToken()}` }
      });
  }

  /* Unauthenticated calls */

  public getUnauthenticated<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(this.getCompleteEndpointUrl(endpoint));
  }

  public postUnauthenticated<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(this.getCompleteEndpointUrl(endpoint), data);
  }

  /* Helpers */

  private getCompleteEndpointUrl(endpoint: string): string {
    if (!this.careerApiEndpointUrl) {
      throw new Error('Career Api Endpoint Url is null or empty');
    }
    return `${this.careerApiEndpointUrl}${endpoint}`;
  }
}