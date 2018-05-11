import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-application-letter',
  templateUrl: './application-letter.component.html',
  styleUrls: ['./application-letter.component.css']
})
export class ApplicationLetterComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private titleService:Title
  ) { }

  ngOnInit() {
    this.translate.get('SIGNED-IN.APPLICATION-LETTER.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

}
