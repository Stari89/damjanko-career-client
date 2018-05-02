import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* modules */
import { AppRoutingModule/*, routingComponents*/ } from './app-routing.module';
import { ComponentsPublicModule } from './components-public/components-public.module';
import { ComponentsSignedInModule } from './components-signed-in/components-signed-in.module';

/* components */
import { AppComponent } from './app.component';


import { MasterDashboardComponent } from './master-dashboard/master-dashboard.component';

/* services */
import { RouteAuthenticationGuardService } from './route-authentication-guard.service';
import { AuthenticationService } from './authentication.service';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    MasterDashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsPublicModule,
    ComponentsSignedInModule
  ],
  providers: [
    AuthenticationService,
    RouteAuthenticationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
