import { Component, OnInit } from '@angular/core';
import { ClientLog, ClientLogsService } from '../../career-api/client-logs.service';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-client-logs',
  templateUrl: './client-logs.component.html',
  styleUrls: ['./client-logs.component.css']
})
export class ClientLogsComponent implements OnInit {
  public clientLogs: ClientLog[];
  public errorMessage;

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private clientLogsService: ClientLogsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.translate.get('DASHBOARD.CLIENT-LOGS.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let param = params.get('ip');
      if (param)
      {
        this.clientLogsService.getClientLogsByIp(param).subscribe(
          clientLogsResponse => {
            console.log(clientLogsResponse);
            this.clientLogs = clientLogsResponse.client_logs;
          },
          error => this.errorMessage = error
        );
      } else {
        this.clientLogsService.getClientLogs().subscribe(
          clientLogsService => {
            console.log(clientLogsService);
            this.clientLogs = clientLogsService.client_logs;
          },
          error => this.errorMessage = error
        );
      }
    });
  }

  clearFilter() {
    this.router.navigateByUrl('/client-logs');
  }

  delete() {
    if (!confirm('Are you sure?')) {
      return;
    }

    this.clientLogsService.deleteClientLogs().subscribe(
      logsResponse => { this.ngOnInit() },
      error => this.errorMessage = error.errorMessage
    );
  }
}
