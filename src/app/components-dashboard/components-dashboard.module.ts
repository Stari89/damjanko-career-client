import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* modules */
import { AppRoutingModule, DashboardRoutingComponents } from '../app-routing/app-routing.module';

/* components */
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    DashboardRoutingComponents,
    HeaderComponent,
    SidebarComponent
  ]
})
export class ComponentsDashboardModule { }
