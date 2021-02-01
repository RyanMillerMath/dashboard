import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// add ons
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

// app-wide components components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';

// page-level components
import { VehicleStatsComponent } from './vehicle-stats/vehicle-stats.component';
import { VehicleMakeInsightsComponent } from './vehicle-make-insights/vehicle-make-insights.component';
import { TireAnalyticsComponent } from './tire-analytics/tire-analytics.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginRegisterFormComponent } from './auth/shared/login-register-form/login-register-form.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { PasswordResetSentComponent } from './password-reset-sent/password-reset-sent.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';

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
    VehicleStatsComponent,
    VehicleMakeInsightsComponent,
    TireAnalyticsComponent,
    LoginComponent,
    RegisterComponent,
    LoginRegisterFormComponent,
    ForgotPasswordComponent,
    PasswordResetSentComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
