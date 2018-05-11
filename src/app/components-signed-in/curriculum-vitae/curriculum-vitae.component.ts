import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private titleService:Title
  ) { }

  ngOnInit() {
    this.translate.get('SIGNED-IN.CURRICULUM-VITAE.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

}
