import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiRequestService, UpdateProperty } from './api-request.service';

export interface ArticlesResponse {
  count: number;
  articles: Article[];
}

export interface ArticleResponse {
  message: string;
  article: Article;
}

export interface Article {
  _id: string;
  name: string;
  language: string;
  content: string;
  created: Date;
  modified: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articlesEndpoint: string = 'articles/';

  constructor(private apiRequest: ApiRequestService) { }

  public getArticles(): Observable<ArticlesResponse> {
    return this.apiRequest.get(this.articlesEndpoint);
  }

  public getArticle(articleId: string): Observable<ArticleResponse> {
    return this.apiRequest.get(`${this.articlesEndpoint}${articleId}/`)
  }

  public createArticle(article: Article): Observable<ArticleResponse> {
    return this.apiRequest.post(this.articlesEndpoint, article);
  }

  public updateArticle(articleId: string, article: Article): Observable<ArticleResponse> {
    let data: UpdateProperty[] = [];
    if (article.name) {
      data.push( { propName: 'name', value: article.name });
    }
    if (article.language) {
      data.push( { propName: 'language', value: article.language });
    }
    if (article.content) {
      data.push( { propName: 'content', value: article.content });
    }
    return this.apiRequest.patch(`${this.articlesEndpoint}${articleId}/`, data);
  }

  public deleteArticle(articleId: string): Observable<ArticleResponse> {
    return this.apiRequest.delete(`${this.articlesEndpoint}${articleId}/`);
  }
}
