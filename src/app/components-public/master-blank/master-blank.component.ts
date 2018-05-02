import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-blank',
  templateUrl: './master-blank.component.html',
  styleUrls: ['./master-blank.component.css']
})
export class MasterBlankComponent implements OnInit {

  constructor() {
    (document.body.parentNode as HTMLElement).className = "html-root-blank";
    document.body.className = "body-root-blank";
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    (document.body.parentNode as HTMLElement).className = "";
    document.body.className = "";
  }
}
