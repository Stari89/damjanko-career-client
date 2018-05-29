import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { JwtStorageService } from '../../career-api/jwt-storage.service';
import { Application } from '../../career-api/applications.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ClientLogsService } from '../../career-api/client-logs.service';

@Component({
  selector: 'app-application-letter',
  templateUrl: './application-letter.component.html',
  styleUrls: ['./application-letter.component.css']
})
export class ApplicationLetterComponent implements OnInit {
  public application: Application;
  public lang: string;

  constructor(
    private translate: TranslateService,
    private titleService:Title,
    private jwtStorageService: JwtStorageService,
    public domSanitizer: DomSanitizer,
    private clientLogsService: ClientLogsService
  ) { }

  ngOnInit() {
    this.translate.get('SIGNED-IN.APPLICATION-LETTER.TITLE').subscribe((res: string) => {
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
