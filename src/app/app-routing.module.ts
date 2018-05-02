import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* public components */
import { MasterBlankComponent } from './components-public/master-blank/master-blank.component';
import { SignInComponent } from './components-public/sign-in/sign-in.component';
import { UnauthorizedComponent } from './components-public/unauthorized/unauthorized.component';
import { PageNotFoundComponent } from './components-public/page-not-found/page-not-found.component';

/* signed-in components */
import { MasterSignedInComponent } from './components-signed-in/master-signed-in/master-signed-in.component';
import { ApplicationLetterComponent } from './components-signed-in/application-letter/application-letter.component';
import { CurriculumVitaeComponent } from './components-signed-in/curriculum-vitae/curriculum-vitae.component';
import { AboutComponent } from './components-signed-in/about/about.component';

/* dashboard components */
import { MasterDashboardComponent } from './components-dashboard/master-dashboard/master-dashboard.component';
import { UsersComponent } from './components-dashboard/users/users.component';

/* services */
import { RouteAuthenticationGuardService } from './route-authentication-guard.service';

const routes: Routes = [
	{
		// user (sign-in required) routes
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
		// admin (admin sign-in required) routes
		path: '',
		component: MasterDashboardComponent,
		canActivate: [ RouteAuthenticationGuardService ],
		children: [
			{ path: 'users', component: UsersComponent }
		]
	},
	{
		// public (sign-in not required) routes
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
  export const SignedInRoutingComponents = [ MasterSignedInComponent, ApplicationLetterComponent, CurriculumVitaeComponent, AboutComponent ];
  export const DashboardRoutingComponents = [ MasterDashboardComponent, UsersComponent ];
  export const PublicRoutingComponents = [ MasterBlankComponent, SignInComponent, UnauthorizedComponent, PageNotFoundComponent ];