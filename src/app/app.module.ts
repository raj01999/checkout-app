import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { SuccessPaymentComponent } from './components/success-payment/success-payment.component';
import { FailedPaymentComponent } from './components/failed-payment/failed-payment.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StripePaymentComponent,
    SuccessPaymentComponent,
    FailedPaymentComponent,
    MainPageComponent,
    CartPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
