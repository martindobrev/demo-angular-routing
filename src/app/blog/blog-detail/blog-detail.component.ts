import { Component, OnInit } from '@angular/core';
import { Article, BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  article: Article;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(map => {
      this.article = this.blogService.getArticle(map.get('id'));
    });
  }
}
