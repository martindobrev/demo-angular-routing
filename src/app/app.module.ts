import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { BlogModule } from './blog/blog.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { MetricsComponent } from './dashboard/metrics/metrics.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    DashboardComponent,
    DashboardHomeComponent,
    MetricsComponent
  ],
  imports: [
    BrowserModule,
    BlogModule,
    DashboardRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
