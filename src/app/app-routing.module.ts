import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { SuccessPaymentComponent } from './components/success-payment/success-payment.component';
import { FailedPaymentComponent } from './components/failed-payment/failed-payment.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'success', component: SuccessPaymentComponent },
  { path: 'failed', component: FailedPaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
