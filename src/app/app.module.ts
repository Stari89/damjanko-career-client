import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MasterBlankComponent } from './master-blank/master-blank.component';
import { MasterSignedInComponent } from './master-signed-in/master-signed-in.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CurriculumVitaeComponent,
    IndexComponent,
    AboutComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    MasterBlankComponent,
    MasterSignedInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
