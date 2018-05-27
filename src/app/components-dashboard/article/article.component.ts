import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { ArticlesService, Article } from '../../career-api/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private articleId: string;
  public article: Article = { language: 'en' } as Article;
  public errorMessage: string;
  public successMessage: string;
  public languages = [ 'en', 'si' ];
  public mode: string;

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router) {}

  ngOnInit() {
    this.translate.get('DASHBOARD.ARTICLE.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let param = params.get('id');
      if (param)
      {
        this.mode = 'update';
        this.articleId = params.get('id');
        this.articlesService.getArticle(this.articleId).subscribe(
          articleResponse => {
            this.article = articleResponse.article;
          },
          error => this.errorMessage = error.message
        );
      } else {
        this.mode = 'insert';
      }
    });
  }

  onSubmit(close: boolean) {
    switch (this.mode) {
      case 'insert':
        this.articlesService.createArticle(this.article).subscribe(
          articleResponse => {
            if (close) {
              this.router.navigateByUrl('/articles');
            } else {
              this.router.navigateByUrl(`/articles/${articleResponse.article._id}`);
              this.successMessage = articleResponse.message;
            }
          },
          error => {
            this.errorMessage = error.message;
          }
        );
        break;
      case 'update':
        this.articlesService.updateArticle(this.articleId, this.article).subscribe(
          articleResponse => {
            if (close) {
              this.router.navigateByUrl('/articles');
            } else {
              this.successMessage = articleResponse.message;
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

    this.articlesService.deleteArticle(this.articleId).subscribe(
      articleResponse => {
        this.router.navigateByUrl('/articles');
      },
      error => this.errorMessage = error.message
    );
  }

}
