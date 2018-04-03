import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationLetterComponent } from './application-letter.component';

describe('ApplicationLetterComponent', () => {
  let component: ApplicationLetterComponent;
  let fixture: ComponentFixture<ApplicationLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
