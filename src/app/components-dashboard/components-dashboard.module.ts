import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

/* modules */
import { AppRoutingModule, DashboardRoutingComponents } from '../app-routing/app-routing.module';

/* components */
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticlesComponent } from './articles/articles.component';
import { CodeListsComponent } from './code-lists/code-lists.component';
import { ApplicationsComponent } from './applications/applications.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [
    DashboardRoutingComponents,
    HeaderComponent,
    SidebarComponent,
    ArticlesComponent,
    CodeListsComponent,
    ApplicationsComponent
  ]
})
export class ComponentsDashboardModule { }
