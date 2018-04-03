import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSignedInComponent } from './master-signed-in.component';

describe('MasterSignedInComponent', () => {
  let component: MasterSignedInComponent;
  let fixture: ComponentFixture<MasterSignedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterSignedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterSignedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
