import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterBlankComponent } from './master-blank/master-blank.component';
import { MasterSignedInComponent } from './master-signed-in/master-signed-in.component';
import { MasterDashboardComponent } from './master-dashboard/master-dashboard.component';
import { ApplicationLetterComponent } from './application-letter/application-letter.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteAuthenticationGuardService } from './route-authentication-guard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
	{
		// sign-in-required routes
		path: '',
		component: MasterSignedInComponent,
		canActivate: [ RouteAuthenticationGuardService ],
		children: [
			{ path: '', component: ApplicationLetterComponent, pathMatch: 'full' },
			{ path: 'application-letter', component: ApplicationLetterComponent },
			{ path: 'curriculum-vitae', component: CurriculumVitaeComponent },
			{ path: 'about', component: AboutComponent }
		]
	},
	{
		// admin-sign-in-required routes
		path: '',
		component: MasterDashboardComponent,
		canActivate: [ RouteAuthenticationGuardService ],
		children: [
			{ path: 'users', component: UsersComponent }
		]
	},
	{
		// sign-in-not-required routes
		path: '',
		component: MasterBlankComponent,
		children: [
			{ path: 'sign-in', component: SignInComponent },
			{ path: 'unauthorized', component: UnauthorizedComponent },
			{ path: "**", component: PageNotFoundComponent }
		]
	},
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents = [ MasterBlankComponent, ApplicationLetterComponent, CurriculumVitaeComponent, AboutComponent, SignInComponent, PageNotFoundComponent ];