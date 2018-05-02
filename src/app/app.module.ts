import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* modules */
import { AppRoutingModule/*, routingComponents*/ } from './app-routing.module';
import { ComponentsPublicModule } from './components-public/components-public.module';
import { ComponentsSignedInModule } from './components-signed-in/components-signed-in.module';
import { ComponentsDashboardModule } from './components-dashboard/components-dashboard.module';

/* components */
import { AppComponent } from './app.component';

/* services */
import { RouteAuthenticationGuardService } from './route-authentication-guard.service';
import { AuthenticationService } from './authentication.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsPublicModule,
    ComponentsSignedInModule,
    ComponentsDashboardModule
  ],
  providers: [
    AuthenticationService,
    RouteAuthenticationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
