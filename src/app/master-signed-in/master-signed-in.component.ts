import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-signed-in',
  templateUrl: './master-signed-in.component.html',
  styleUrls: ['./master-signed-in.component.css']
})
export class MasterSignedInComponent implements OnInit {

  constructor() {
    (document.body.parentNode as HTMLElement).className = "html-root-signed-in";
    document.body.className = "body-root-signed-in";
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    (document.body.parentNode as HTMLElement).className = "";
    document.body.className = "";
  }
}
