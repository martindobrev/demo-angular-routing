import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminComponent } from './admin/admin.component';
import { AuthModule } from './../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AuthModule
  ],
  declarations: [AdminDashboardComponent, AdminPagesComponent, AdminArticlesComponent, AdminComponent]
})
export class AdminModule { }
