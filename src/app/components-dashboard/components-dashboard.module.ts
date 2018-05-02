import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* modules */
import { AppRoutingModule/*, routingComponents*/ } from '../app-routing.module';

/* components */
import { MasterDashboardComponent } from './master-dashboard/master-dashboard.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    MasterDashboardComponent,
    UsersComponent
  ]
})
export class ComponentsDashboardModule { }
