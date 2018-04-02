import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', component: IndexComponent, pathMatch: 'full' },
	{ path: 'index', component: IndexComponent },
	{ path: 'curriculum-vitae', component: CurriculumVitaeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'login', component: LoginComponent },
	{ path: "**", component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents = [ IndexComponent, CurriculumVitaeComponent, AboutComponent, LoginComponent, PageNotFoundComponent ];