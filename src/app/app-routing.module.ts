import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleStatsComponent } from './vehicle-stats/vehicle-stats.component';
import { VehicleMakeInsightsComponent } from './vehicle-make-insights/vehicle-make-insights.component';
import { TireAnalyticsComponent } from './tire-analytics/tire-analytics.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'vehicle-stats', component: VehicleStatsComponent },
  { path: 'make-insights', component: VehicleMakeInsightsComponent },
  { path: 'tire-analytics', component: TireAnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
