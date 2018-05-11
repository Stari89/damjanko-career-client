import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/* modules */
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ComponentsPublicModule } from './components-public/components-public.module';
import { ComponentsSignedInModule } from './components-signed-in/components-signed-in.module';
import { ComponentsDashboardModule } from './components-dashboard/components-dashboard.module';
import { CareerApiModule } from './career-api/career-api.module';

/* components */
import { AppComponent } from './app.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    ComponentsPublicModule,
    ComponentsSignedInModule,
    ComponentsDashboardModule,
    CareerApiModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
