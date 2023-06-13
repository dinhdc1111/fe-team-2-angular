import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  carts: any = [];
  totalQuantity: number = this.cartService.getCartTotalQuantity();
  totalPrice: number = this.cartService.getCartTotalPrice();
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.carts = this.cartService.getCart();
  }

  subtotal(product: any) {
    return product.quantity * product.price;
  }
  selectAllItems() {}

  toggleItemSelection(item: any) {}

  isSelected(item: any) {}

  updateSelectAll() {}

  handleRemoveCart(idx: number | undefined) {
    if (confirm('Ban co chac chan muon xoa?')) {
      this.carts.splice(idx, 1);
      this.cartService.saveCart(this.carts);
    }
  }

  handleTotalCart() {}

  handleUpdateCart(idx: number, e: any) {
    let newQuantity = e.target.value;
    newQuantity = newQuantity > 0 ? newQuantity : 1;
    this.carts[idx].quantity = newQuantity;
    this.cartService.saveCart(this.carts);

    // console.log(e.target.value);
  }

  handleIncrementCart(idx: number, qtt: any) {
    let newQuantity = qtt + 1;
    newQuantity = newQuantity > 0 ? newQuantity : 1;
    this.carts[idx].quantity = newQuantity;
    this.cartService.saveCart(this.carts);
  }
  handleDecrementCart(idx: number, qtt: any) {
    let newQuantity = qtt - 1;
    newQuantity = newQuantity > 0 ? newQuantity : 1;
    this.carts[idx].quantity = newQuantity;
    this.cartService.saveCart(this.carts);
  }
}
