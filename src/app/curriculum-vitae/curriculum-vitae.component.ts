import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Curriculum Vitae - carrer.DamjanKo");
  }

  ngOnInit() {
  }

}
