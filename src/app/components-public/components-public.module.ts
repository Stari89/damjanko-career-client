import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

/* modules */
import { AppRoutingModule, PublicRoutingComponents } from '../app-routing/app-routing.module';

/* components */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    TranslateModule
  ],
  declarations: [
    PublicRoutingComponents
  ]
})
export class ComponentsPublicModule { }
