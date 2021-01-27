import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './home/verify-email/verify-email.component';
import { VehicleStatsComponent } from './vehicle-stats/vehicle-stats.component';
import { VehicleMakeInsightsComponent } from './vehicle-make-insights/vehicle-make-insights.component';
import { TireAnalyticsComponent } from './tire-analytics/tire-analytics.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'verify-email', component: VerifyEmailComponent }
    ]
  },
  { path: 'vehicle-stats', component: VehicleStatsComponent },
  { path: 'make-insights', component: VehicleMakeInsightsComponent },
  { path: 'tire-analytics', component: TireAnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
