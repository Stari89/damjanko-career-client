import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* public components */
import { MasterBlankComponent } from '../components-public/master-blank/master-blank.component';
import { SignInComponent } from '../components-public/sign-in/sign-in.component';
import { UnauthorizedComponent } from '../components-public/unauthorized/unauthorized.component';
import { PageNotFoundComponent } from '../components-public/page-not-found/page-not-found.component';

/* signed-in components */
import { MasterSignedInComponent } from '../components-signed-in/master-signed-in/master-signed-in.component';
import { ApplicationLetterComponent } from '../components-signed-in/application-letter/application-letter.component';
import { CurriculumVitaeComponent } from '../components-signed-in/curriculum-vitae/curriculum-vitae.component';
import { AboutComponent } from '../components-signed-in/about/about.component';

/* dashboard components */
import { MasterDashboardComponent } from '../components-dashboard/master-dashboard/master-dashboard.component';
import { UsersComponent } from '../components-dashboard/users/users.component';
import { UserComponent } from '../components-dashboard/user/user.component';
import { ArticlesComponent } from '../components-dashboard/articles/articles.component';
import { ArticleComponent } from '../components-dashboard/article/article.component';
import { ApplicationsComponent } from '../components-dashboard/applications/applications.component';
import { ApplicationComponent } from '../components-dashboard/application/application.component';
import { LogsComponent } from '../components-dashboard/logs/logs.component';
import { ClientLogsComponent } from '../components-dashboard/client-logs/client-logs.component';

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
			{ path: 'applications/new', component: ApplicationComponent},
			{ path: 'applications/:id', component: ApplicationComponent},
			{ path: 'applications', component: ApplicationsComponent},
			{ path: 'users/new', component: UserComponent },
			{ path: 'users/:id', component: UserComponent },
			{ path: 'users', component: UsersComponent },
			{ path: 'articles/new', component: ArticleComponent },
			{ path: 'articles/:id', component: ArticleComponent },
			{ path: 'articles', component: ArticlesComponent },
			{ path: 'logs', component: LogsComponent },
			{ path: 'logs/:id', component: LogsComponent },
			{ path: 'client-logs', component: ClientLogsComponent },
			{ path: 'client-logs/:ip', component: ClientLogsComponent },
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
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: [ RouteAuthenticationGuardService ]
  })
  export class AppRoutingModule { }
  export const SignedInRoutingComponents = [ MasterSignedInComponent, ApplicationLetterComponent, CurriculumVitaeComponent, AboutComponent ];
  export const DashboardRoutingComponents = [ MasterDashboardComponent, UsersComponent, ArticlesComponent, UserComponent, ArticleComponent, ApplicationComponent, ApplicationsComponent, LogsComponent, ClientLogsComponent ];
  export const PublicRoutingComponents = [ MasterBlankComponent, SignInComponent, UnauthorizedComponent, PageNotFoundComponent ];