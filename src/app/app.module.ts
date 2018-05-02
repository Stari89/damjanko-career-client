import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* modules */
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ComponentsPublicModule } from './components-public/components-public.module';
import { ComponentsSignedInModule } from './components-signed-in/components-signed-in.module';
import { ComponentsDashboardModule } from './components-dashboard/components-dashboard.module';
import { CareerApiModule } from './career-api/career-api.module';

/* components */
import { AppComponent } from './app.component';

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
    ComponentsDashboardModule,
    CareerApiModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
