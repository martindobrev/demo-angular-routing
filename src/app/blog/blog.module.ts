import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogService } from './blog.service';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  providers: [
    BlogService
  ],
  declarations: [BlogListComponent, BlogDetailComponent]
})
export class BlogModule { }
