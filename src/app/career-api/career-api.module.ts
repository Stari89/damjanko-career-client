import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* services */
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthenticationService
  ]
})
export class CareerApiModule { }
export const CareerApiServices = [ AuthenticationService ];