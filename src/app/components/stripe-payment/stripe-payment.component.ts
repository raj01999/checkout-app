import { Component, Input } from '@angular/core';
import { Stripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrl: './stripe-payment.component.css',
})
export class StripePaymentComponent {
  stripe: Stripe | null = null;
  @Input() cartItems: any;
  constructor() {
    this.loadStripe();
  }
  async loadStripe() {
    const stripe = await import('@stripe/stripe-js');
    this.stripe = await stripe.loadStripe(
      'pk_test_51OKFrhSE3NqABDdNIMMkcRNv96ZoguRBmPWhqRWod4nHG5E9iynmX41FOJ22dPLePjtkZwZXQaFF3ScxZp1lR2NH00CxrEgo8x'
    );
  }
  async onClick() {
    if (!this.stripe) {
      return;
    }
    let lineItems: any = [];
    this.cartItems.forEach((item: any) => {
      lineItems.push({ price: item.default_price, quantity: item.quantity });
    });
    let redirectUrl = window.location.href;
    try {
      const session = await this.stripe.redirectToCheckout({
        lineItems: lineItems,
        mode: 'payment',
        successUrl: redirectUrl + 'success', // Replace with your success URL
        cancelUrl: redirectUrl + 'failed', // Replace with your cancel URL
      });
      console.log('session: ', session);
    } catch (err) {
      console.log(err);
    }
  }
}
