import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* modules */
import { AppRoutingModule/*, routingComponents*/ } from './app-routing.module';
import { ComponentsPublicModule } from './components-public/components-public.module'

/* components */
import { AppComponent } from './app.component';

import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ApplicationLetterComponent } from './application-letter/application-letter.component';
import { AboutComponent } from './about/about.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MasterSignedInComponent } from './master-signed-in/master-signed-in.component';
import { MasterDashboardComponent } from './master-dashboard/master-dashboard.component';

/* services */
import { RouteAuthenticationGuardService } from './route-authentication-guard.service';
import { AuthenticationService } from './authentication.service';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    CurriculumVitaeComponent,
    ApplicationLetterComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    MasterSignedInComponent,
    MasterDashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsPublicModule
  ],
  providers: [
    AuthenticationService,
    RouteAuthenticationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
