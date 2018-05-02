import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* modules */
import { AppRoutingModule, DashboardRoutingComponents } from '../app-routing/app-routing.module';

/* components */

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    DashboardRoutingComponents
  ]
})
export class ComponentsDashboardModule { }
