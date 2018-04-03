import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-application-letter',
  templateUrl: './application-letter.component.html',
  styleUrls: ['./application-letter.component.css']
})
export class ApplicationLetterComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Application - carrer.DamjanKo");
  }

  ngOnInit() {
  }

}
