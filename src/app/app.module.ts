import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* components */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ApplicationLetterComponent } from './application-letter/application-letter.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MasterBlankComponent } from './master-blank/master-blank.component';
import { MasterSignedInComponent } from './master-signed-in/master-signed-in.component';

/* services */
import { RouteAuthenticationGuardService } from './route-authentication-guard.service';
import { AuthenticationService } from './authentication.service';
import { MasterDashboardComponent } from './master-dashboard/master-dashboard.component';
import { UsersComponent } from './users/users.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CurriculumVitaeComponent,
    ApplicationLetterComponent,
    AboutComponent,
    SignInComponent,
    FooterComponent,
    HeaderComponent,
    MasterBlankComponent,
    MasterSignedInComponent,
    MasterDashboardComponent,
    UsersComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    RouteAuthenticationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
