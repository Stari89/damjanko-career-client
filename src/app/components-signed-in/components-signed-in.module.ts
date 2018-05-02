import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* modules */
import { AppRoutingModule, SignedInRoutingComponents } from '../app-routing.module';

/* components */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    SignedInRoutingComponents,
    FooterComponent,
    HeaderComponent
  ]
})
export class ComponentsSignedInModule { }
