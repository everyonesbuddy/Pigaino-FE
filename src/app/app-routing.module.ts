import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StripeSuccessComponent } from './components/stripe-success/stripe-success.component';
import { AuthGuard } from './guard/auth.guard';
import { SubscriptionPageComponent } from './components/subscription-page/subscription-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { DealFlowDetailsComponent } from './components/deal-flow-details/deal-flow-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'subscriptions',
    component: SubscriptionPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stripe/success',
    component: StripeSuccessComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dealsFlowDetailPage/:id',
    component: DealFlowDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
