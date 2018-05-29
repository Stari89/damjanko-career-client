import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { JwtStorageService } from '../../career-api/jwt-storage.service';
import { Application } from '../../career-api/applications.service';
import { ClientLogsService } from '../../career-api/client-logs.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public application: Application;
  public lang: string;

  constructor(
    private translate: TranslateService,
    private titleService:Title,
    private jwtStorageService: JwtStorageService,
    private clientLogsService: ClientLogsService
  ) { }

  ngOnInit() {
    this.translate.get('SIGNED-IN.ABOUT.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
    
    this.application = this.jwtStorageService.getUserApplication();
    this.lang = this.translate.currentLang;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
    this.clientLogsService.createLog('Inited page');
  }

}
