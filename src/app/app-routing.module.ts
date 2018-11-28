import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

const appRoutes: Routes = [
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
  
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
