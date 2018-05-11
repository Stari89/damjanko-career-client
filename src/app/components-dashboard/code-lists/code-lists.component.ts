import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-code-lists',
  templateUrl: './code-lists.component.html',
  styleUrls: ['./code-lists.component.css']
})
export class CodeListsComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.translate.get('DASHBOARD.CODE-LISTS.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

}
