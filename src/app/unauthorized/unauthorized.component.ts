import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("401 Unauthorized - career.DamjanKo");
  }

  ngOnInit() {
  }

}
