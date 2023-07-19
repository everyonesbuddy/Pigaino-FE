import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { StripeSuccessComponent } from './components/stripe-success/stripe-success.component';
import { StripeCancelComponent } from './components/stripe-cancel/stripe-cancel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SafeurlPipe } from './customepipe/safeurl.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UrlService } from './services/url.service';
import { MarkdownModule } from 'ngx-markdown';
import { SubscriptionPageComponent } from './components/subscription-page/subscription-page.component';
import { SubscriptionCardComponent } from './components/subscription-card/subscription-card.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { DealFlowDetailsComponent } from './components/deal-flow-details/deal-flow-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,

    LoginComponent,
    SignUpComponent,
    StripeSuccessComponent,
    StripeCancelComponent,
    DashboardComponent,
    SafeurlPipe,

    SubscriptionPageComponent,
    SubscriptionCardComponent,
    SettingsPageComponent,
    DealFlowDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MarkdownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    UrlService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
