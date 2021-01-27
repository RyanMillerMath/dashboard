import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// add ons
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

// app-level/shared components components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';

// page & children components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './home/verify-email/verify-email.component';
import { VehicleStatsComponent } from './vehicle-stats/vehicle-stats.component';
import { VehicleMakeInsightsComponent } from './vehicle-make-insights/vehicle-make-insights.component';
import { TireAnalyticsComponent } from './tire-analytics/tire-analytics.component';

// I'd normally keep the api key in a non-committed file of secrets/env vars for security,
// but this account is just for this project and will be deactivated afterwards.
// I'd also obviously store prod/dev copies separately in environment.prod.ts & environment.ts.
const firebaseConfig = {
  apiKey: 'AIzaSyDcQT2PBqZ5JclC04JjnJJoGtNjwqf0YbM',
  authDomain: 'dashboard-302701.firebaseapp.com',
  projectId: 'dashboard-302701',
  storageBucket: 'dashboard-302701.appspot.com',
  messagingSenderId: '439518714220',
  appId: '1:439518714220:web:e06cd58a66a5e1756b3b49',
  measurementId: 'G-HPVM0EN5E1'
};

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
