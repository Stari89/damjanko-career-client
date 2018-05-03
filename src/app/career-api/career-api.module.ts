import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* services */
import { AuthenticationService } from './authentication.service';
import { UsersService } from './users.service';
import { ApiRequestService } from './api-request.service';
import { JwtStorageService } from './jwt-storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthenticationService,
    UsersService,
    ApiRequestService,
    JwtStorageService
  ]
})
export class CareerApiModule { }
export const CareerApiServices = [ AuthenticationService ];