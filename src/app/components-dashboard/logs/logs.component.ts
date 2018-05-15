import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { LogsService, Log } from '../../career-api/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  public logs: Log[];
  public errorMessage;

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private logsService: LogsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.translate.get('DASHBOARD.LOGS.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let param = params.get('id');
      if (param)
      {
        this.logsService.getLogsByUser(param).subscribe(
          logsResponse => {
            console.log(logsResponse);
            this.logs = logsResponse.logs;
          },
          error => this.errorMessage = error
        );
      } else {
        this.logsService.getLogs().subscribe(
          logsResponse => {
            console.log(logsResponse);
            this.logs = logsResponse.logs;
          },
          error => this.errorMessage = error
        );
      }
    });
  }

  clearFilter() {
    this.router.navigateByUrl('/logs');
  }

  delete() {
    if (!confirm('Are you sure?')) {
      return;
    }

    this.logsService.deleteLogs().subscribe(
      logsResponse => { this.ngOnInit() },
      error => this.errorMessage = error.errorMessage
    );
  }

}
