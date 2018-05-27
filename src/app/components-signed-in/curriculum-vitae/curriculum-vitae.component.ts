import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { JwtStorageService } from '../../career-api/jwt-storage.service';
import { Application } from '../../career-api/applications.service';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent implements OnInit {
  public application: Application;
  public lang: string;

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private jwtStorageService: JwtStorageService
  ) { }

  ngOnInit() {
    this.translate.get('SIGNED-IN.CURRICULUM-VITAE.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    this.application = this.jwtStorageService.getUserApplication();
    this.lang = this.translate.currentLang;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }
}
