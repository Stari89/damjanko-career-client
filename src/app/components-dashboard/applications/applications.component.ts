import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { ApplicationsService, Application } from '../../career-api/applications.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  public applications : Application[];
  public errorMessage;

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private applicationsService: ApplicationsService
  ) { }

  ngOnInit() {
    this.translate.get('DASHBOARD.APPLICATIONS.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    this.applicationsService.getApplications().subscribe(
      applicationsResponse => {
        console.log(applicationsResponse);
        this.applications = applicationsResponse.applications;
      },
      error => this.errorMessage = error
    );

  }

}
