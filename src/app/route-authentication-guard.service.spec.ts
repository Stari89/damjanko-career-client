import { TestBed, inject } from '@angular/core/testing';

import { RouteAuthenticationGuardService } from './route-authentication-guard.service';

describe('RouteAuthenticationGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteAuthenticationGuardService]
    });
  });

  it('should be created', inject([RouteAuthenticationGuardService], (service: RouteAuthenticationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
