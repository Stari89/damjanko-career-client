import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { ClientLogsService } from '../../career-api/client-logs.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private clientLogsService: ClientLogsService
  ) { }

  ngOnInit() {
    this.translate.get('PUBLIC.UNAUTHORIZED.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
    this.clientLogsService.createLog('Inited page');
  }
}
