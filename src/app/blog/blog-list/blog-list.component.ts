import { Component, OnInit } from '@angular/core';
import { Article, BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  articles: Array<Article>;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.articles = this.blogService.getArticles();
  }
}
