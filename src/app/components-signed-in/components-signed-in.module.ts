import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* modules */
import { AppRoutingModule/*, routingComponents*/ } from '../app-routing.module';

/* components */

import { MasterSignedInComponent } from './master-signed-in/master-signed-in.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ApplicationLetterComponent } from './application-letter/application-letter.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    CurriculumVitaeComponent,
    ApplicationLetterComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    MasterSignedInComponent
  ]
})
export class ComponentsSignedInModule { }
