import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { ApplicationsService, Application } from '../../career-api/applications.service';
import { ArticlesService, Article } from '../../career-api/articles.service';
import { UsersService, User } from '../../career-api/users.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  private applicationId: string;
  public application: Application = { active: true } as Application;
  public errorMessage: string;
  public successMessage: string;
  public mode: string;
  public articles: Article[];
  public users: User[];

  constructor(private translate: TranslateService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private applicationsService: ApplicationsService,
    private articlesService: ArticlesService,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.translate.get('DASHBOARD.APPLICATION.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    this.articlesService.getArticles().subscribe(
      articlesResponse => {
        console.log(articlesResponse);
        this.articles = articlesResponse.articles;
      },
      error => {
        this.errorMessage = error.message;
      }
    );

    this.usersService.getUsers().subscribe(
      usersResponse => {
        console.log(usersResponse);
        this.users = usersResponse.users;
      },
      error => {
        this.errorMessage = error.message;
      }
    );

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let param = params.get('id');
      if (param) {
        this.mode = 'update';
        this.applicationId = params.get('id');
        this.applicationsService.getApplication(this.applicationId).subscribe(
          applicationResponse => {
            console.log(applicationResponse);
            this.application = applicationResponse.application;
          },
          error => {
            this.errorMessage = error.message;
          }
        );
      } else {
        this.mode = 'insert';
      }
    });
  }

  onSubmit(close: boolean) {
    switch (this.mode) {
      case 'insert':
        console.log(this.application);
        this.applicationsService.createApplication(this.application).subscribe(
          applicationResponse => {
            if (close) {
              this.router.navigateByUrl('/applications');
            } else {
              this.router.navigateByUrl(`/applications/${applicationResponse.application._id}`);
              this.successMessage = applicationResponse.message;
            }
          },
          error => {
            this.errorMessage = error.message;
          }
        );
        break;
      case 'update':
        this.applicationsService.updateApplication(this.applicationId, this.application).subscribe(
          applicationResponse => {
            if (close) {
              this.router.navigateByUrl('/applications');
            } else {
              this.successMessage = applicationResponse.message;
            }
          },
          error => {
            this.errorMessage = error.message;
          }
        );
        break;
    }
  }

  delete() {
    if (!confirm('Are you sure?')) {
      return;
    }

    this.applicationsService.deleteApplication(this.applicationId).subscribe(
      applicationResponse => {
        this.router.navigateByUrl('/applications');
      },
      error => this.errorMessage = error.message
    );
  }

  compareFn(optionA, optionB) : boolean {
    if (!optionA || !optionB) {
      return false;
    }
    return optionA._id === optionB._id;
  }
}
