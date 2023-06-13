import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  getCart() {
    let cartJson = sessionStorage.getItem('cart');
    if (cartJson) {
      return JSON.parse(cartJson);
    } else {
      return [];
    }
  }

  saveCart(carts: any) {
    let cartJson = JSON.stringify(carts);
    sessionStorage.setItem('cart', cartJson);
  }

  getCartTotalPrice() {
    let carts = this.getCart();
    let total: number = 0;
    carts.forEach((item: any) => {
      total += item.quantity * item.price;
    });
    return total;
  }

  getCartTotalQuantity() {
    let carts = this.getCart();
    let total: number = 0;
    carts.forEach((item: any) => {
      total += item.quantity;
    });
    return total;
  }
}
