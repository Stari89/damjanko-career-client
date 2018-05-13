import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

/* modules */
import { AppRoutingModule, SignedInRoutingComponents } from '../app-routing/app-routing.module';

/* components */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule
  ],
  declarations: [
    SignedInRoutingComponents,
    FooterComponent,
    HeaderComponent,
    UserMenuComponent
  ]
})
export class ComponentsSignedInModule { }
