import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private titleService:Title
  ) { }

  ngOnInit() {
    this.translate.get('SIGNED-IN.ABOUT.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

}
