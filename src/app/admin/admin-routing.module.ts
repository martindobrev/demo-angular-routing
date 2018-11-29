import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      children: [{
        path: 'articles', component: AdminArticlesComponent
      }, {
        path: 'pages', component: AdminPagesComponent
      }, {
        path: '', component: AdminDashboardComponent
      }]
    }]
  }, {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
