import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { ArticlesService, Article } from '../../career-api/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public articles: Article[];
  public errorMessage;

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.translate.get('DASHBOARD.ARTICLES.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    this.articlesService.getArticles().subscribe(
      articlesResponse => {
        console.log(articlesResponse);  
        this.articles = articlesResponse.articles;
      },
      error => this.errorMessage = error
    );
  }

}
