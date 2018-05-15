import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtStorageService } from './jwt-storage.service';
import { environment } from '../../environments/environment';

export interface UpdateProperty {
  propName: string;
  value: any;
}

@Injectable()
export class ApiRequestService {
  private careerApiEndpointUrl: string = environment.careerApiEndpointUrl;

  constructor(private http: HttpClient, private jwtStorage: JwtStorageService) { }

  /* Authenticated requests */

  public get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(
      this.getCompleteEndpointUrl(endpoint),
      this.getHeaders());
  }

  public post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(
      this.getCompleteEndpointUrl(endpoint),
      data,
      this.getHeaders());
  }

  public patch<T>(endpoint: string, data: any): Observable<T> {
    return this.http.patch<T>(
      this.getCompleteEndpointUrl(endpoint),
      data,
      this.getHeaders());
  }

  public put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(
      this.getCompleteEndpointUrl(endpoint),
      data,
      this.getHeaders());
  }

  public delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(
      this.getCompleteEndpointUrl(endpoint),
      this.getHeaders());
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

  private getHeaders() {
    return {
      headers: { Authorization: `Bearer ${this.jwtStorage.getToken()}` }
    };
  }
}
