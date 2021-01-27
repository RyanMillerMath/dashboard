import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './navbar/navbar.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './home/verify-email/verify-email.component';
import { VehicleStatsComponent } from './vehicle-stats/vehicle-stats.component';
import { VehicleMakeInsightsComponent } from './vehicle-make-insights/vehicle-make-insights.component';
import { TireAnalyticsComponent } from './tire-analytics/tire-analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    VehicleStatsComponent,
    VehicleMakeInsightsComponent,
    TireAnalyticsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
