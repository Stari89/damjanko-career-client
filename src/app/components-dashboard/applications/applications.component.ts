import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.translate.get('DASHBOARD.APPLICATIONS.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

}
