import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.translate.get('DASHBOARD.ARTICLES.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

}
