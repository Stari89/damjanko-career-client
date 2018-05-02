import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* modules */
import { AppRoutingModule/*, routingComponents*/ } from '../app-routing.module';

/* components */
import { MasterBlankComponent } from './master-blank/master-blank.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    MasterBlankComponent,
    PageNotFoundComponent,
    UnauthorizedComponent,
    SignInComponent
  ]
})
export class ComponentsPublicModule { }
