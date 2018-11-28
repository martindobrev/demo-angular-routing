import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {


  articles = [
    {id: '1', title: 'hello world', content: 'bla bla bla'},
    {id: '2', title: 'yoyoyoyo', content: 'tut utut ututut tu'},
    {id: '3', title: '........', content: 'yet another article'},
  ]
  
  constructor() { }

  getArticles(): Array<Article> {
    return this.articles;
  }

  getArticle(id: string): Article {
    return this.articles.find((value) => {
      return value.id === id;
    });
  }
}


export interface Article {
  id: string;
  title: string;
  content: string;
}
