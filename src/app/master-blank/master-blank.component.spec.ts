import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBlankComponent } from './master-blank.component';

describe('MasterBlankComponent', () => {
  let component: MasterBlankComponent;
  let fixture: ComponentFixture<MasterBlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterBlankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
