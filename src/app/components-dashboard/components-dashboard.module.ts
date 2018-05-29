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
import { ApplicationsComponent } from './applications/applications.component';
import { LogsComponent } from './logs/logs.component';
import { ArticleComponent } from './article/article.component';
import { ApplicationComponent } from './application/application.component';
import { ClientLogsComponent } from './client-logs/client-logs.component';

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
    ApplicationsComponent,
    LogsComponent,
    ArticleComponent,
    ApplicationComponent,
    ClientLogsComponent
  ]
})
export class ComponentsDashboardModule { }
