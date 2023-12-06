import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
  providers: [DataService],
})
export class CartPageComponent {
  @Output() onCartPageChange: EventEmitter<undefined> = new EventEmitter();
  totalItme: number = 0;
  totalPrice: number = 0;
  cartItems: any = [];
  constructor(private dataService: DataService) {
    this.setValue();
  }

  onCartChange() {
    this.onCartPageChange.emit();
  }

  setValue() {
    this.cartItems = this.dataService.cartItems;
    this.totalItme = this.cartItems.length;
    this.totalPrice = this.cartItems.reduce(
      (initialValue: number, item: any) =>
        initialValue + item.price * item.quantity,
      0
    );
  }

  onChangeQuantity(event: Event, id: string) {
    let targetElement = event.target as HTMLInputElement;
    if (Number(targetElement.value) <= 0) {
      window.alert('quantity must be 1 or avobe');
      return this.setValue();
    }
    if (targetElement.value) {
      this.dataService.onChangeCartItem(id, Number(targetElement.value));
      this.setValue();
    }
  }
}
