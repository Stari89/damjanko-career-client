import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.translate.get('PUBLIC.UNAUTHORIZED.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

}
