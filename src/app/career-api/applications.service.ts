import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiRequestService, UpdateProperty } from './api-request.service';
import { User } from './users.service';
import { Article } from './articles.service';

export interface ApplicationsResponse {
  count: number;
  applications: Application[];
}

export interface ApplicationResponse {
  message: string;
  application: Application;
}

export interface Application {
  _id: string;
  name: string;
  user: User;
  active: boolean;
  created: Date;
  modified: Date;
  applicationLetterMainEn: Article;
  applicationLetterMainSi: Article;
  applicationLetterSideEn: Article;
  applicationLetterSideSi: Article;
  curriculumVitaeMainEn: Article;
  curriculumVitaeMainSi: Article;
  curriculumVitaeSideEn: Article;
  curriculumVitaeSideSi: Article;
  aboutMainEn: Article;
  aboutMainSi: Article;
  aboutSideEn: Article;
  aboutSideSi: Article;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  private applicationsEndpoint: string = 'applications/';
  private userApplicationsEndpoint: string = 'applications/user-application/';

  constructor(private apiRequest: ApiRequestService) { }

  public getApplications(): Observable<ApplicationsResponse> {
    return this.apiRequest.get(this.applicationsEndpoint);
  }

  public getApplication(applicationId: string): Observable<ApplicationResponse> {
    return this.apiRequest.get(`${this.applicationsEndpoint}${applicationId}/`);
  }

  public createApplication(application: Application): Observable<ApplicationResponse> {
    return this.apiRequest.post(this.applicationsEndpoint, application);
  }

  public updateApplication(applicationId: string, application: Application): Observable<ApplicationResponse> {
    let data: UpdateProperty[] = [];
    if (application.name) {
      data.push({ propName: 'name', value: application.name });
    }
    if (application.user && application.user._id) {
      data.push({ propName: 'user_id', value: application.user._id });
    }
    data.push({ propName: 'active', value: application.active });
    if (application.applicationLetterMainEn && application.applicationLetterMainEn._id) {
      data.push({ propName: 'applicationLetterMainEn_id', value: application.applicationLetterMainEn._id });
    }
    if (application.applicationLetterMainSi && application.applicationLetterMainSi._id) {
      data.push({ propName: 'applicationLetterMainSi_id', value: application.applicationLetterMainSi._id });
    }
    if (application.applicationLetterSideEn && application.applicationLetterSideEn._id) {
      data.push({ propName: 'applicationLetterSideEn_id', value: application.applicationLetterSideEn._id });
    }
    if (application.applicationLetterSideSi && application.applicationLetterSideSi._id) {
      data.push({ propName: 'applicationLetterSideSi_id', value: application.applicationLetterSideSi._id });
    }
    if (application.curriculumVitaeMainEn && application.curriculumVitaeMainEn._id) {
      data.push({ propName: 'curriculumVitaeMainEn_id', value: application.curriculumVitaeMainEn._id });
    }
    if (application.curriculumVitaeMainSi && application.curriculumVitaeMainSi._id) {
      data.push({ propName: 'curriculumVitaeMainSi_id', value: application.curriculumVitaeMainSi._id });
    }
    if (application.curriculumVitaeSideEn && application.curriculumVitaeSideEn._id) {
      data.push({ propName: 'curriculumVitaeSideEn_id', value: application.curriculumVitaeSideEn._id });
    }
    if (application.curriculumVitaeSideSi && application.curriculumVitaeSideSi._id) {
      data.push({ propName: 'curriculumVitaeSideSi_id', value: application.curriculumVitaeSideSi._id });
    }
    if (application.aboutMainEn && application.aboutMainEn._id) {
      data.push({ propName: 'aboutMainEn_id', value: application.aboutMainEn._id });
    }
    if (application.aboutMainSi && application.aboutMainSi._id) {
      data.push({ propName: 'aboutMainSi_id', value: application.aboutMainSi._id });
    }
    if (application.aboutSideEn && application.aboutSideEn._id) {
      data.push({ propName: 'aboutSideEn_id', value: application.aboutSideEn._id });
    }
    if (application.aboutSideSi && application.aboutSideSi._id) {
      data.push({ propName: 'aboutSideSi_id', value: application.aboutSideSi._id });
    }
    return this.apiRequest.patch(`${this.applicationsEndpoint}${applicationId}/`, data);
  }

  public deleteApplication(applicationId: string): Observable<ApplicationResponse> {
    return this.apiRequest.delete(`${this.applicationsEndpoint}${applicationId}/`);
  }

  public getUserApplication(): Observable<ApplicationResponse> {
    return this.apiRequest.get(this.userApplicationsEndpoint);
  }
}
