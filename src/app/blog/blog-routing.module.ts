import { NgModule } from '@angular/core';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { Routes, RouterModule } from '@angular/router';

const blogRoutes: Routes = [
  {path: 'articles', component: BlogListComponent},
  {path: 'article/:id', component: BlogDetailComponent}
]

@NgModule({
  imports: [
    
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule { }
