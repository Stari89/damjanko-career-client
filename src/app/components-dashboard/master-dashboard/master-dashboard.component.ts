import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-dashboard',
  templateUrl: './master-dashboard.component.html',
  styleUrls: ['./master-dashboard.component.css']
})
export class MasterDashboardComponent implements OnInit {

  constructor() {
    (document.body.parentNode as HTMLElement).className = "html-root-dashboard";
    document.body.className = "body-root-dashboard";
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    (document.body.parentNode as HTMLElement).className = "";
    document.body.className = "";
  }
}
