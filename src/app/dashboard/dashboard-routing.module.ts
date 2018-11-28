import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";
import { MetricsComponent } from "./metrics/metrics.component";
import { NgModule } from "@angular/core";

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [{
            path: '',
            component: DashboardHomeComponent,
        }, {
            path: 'metrics',
            component: MetricsComponent
        }]
    }
]

@NgModule({
    imports: [
      
      RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class DashboardRoutingModule { }
