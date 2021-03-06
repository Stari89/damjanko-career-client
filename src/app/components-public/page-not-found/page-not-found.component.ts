import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { ClientLogsService } from '../../career-api/client-logs.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private titleService:Title,
    private clientLogsService: ClientLogsService
  ) { }

  ngOnInit() {
    this.translate.get('PUBLIC.PAGE-NOT-FOUND.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
    this.clientLogsService.createLog('Inited page');
  }
}
