import { Injectable } from '@angular/core';
import { products } from '../../assets/products';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  cartOpen: boolean = true;
  products: any = [];
  cartItems: any = [];

  constructor() {
    this.products = products;
    let cartItmeStr = sessionStorage.getItem('cart-items');
    if (cartItmeStr) {
      this.cartItems = JSON.parse(cartItmeStr);
    } else {
      for (let product of this.products) {
        let tempProduct = {
          id: product.id,
          name: product.name,
          default_price: product.default_price,
          quantity: Math.floor(Math.random() * 3) + 1,
          image: product.images[0],
          price: product.price,
        };
        this.cartItems.push(tempProduct);
      }
      sessionStorage.setItem('cart-items', JSON.stringify(this.cartItems));
    }
  }

  onCartChange() {
    this.cartOpen = !this.cartOpen;
  }

  onChangeCartItem(id: string, value: number) {
    this.cartItems = this.cartItems.map((item: any) => {
      if (item.id === id && value > 0) {
        item.quantity = value;
      }
      return item;
    });
    sessionStorage.setItem('cart-items', JSON.stringify(this.cartItems));
  }
}
