import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* modules */
import { AppRoutingModule, PublicRoutingComponents } from '../app-routing.module';

/* components */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    PublicRoutingComponents
  ]
})
export class ComponentsPublicModule { }
