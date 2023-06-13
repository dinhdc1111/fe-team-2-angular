import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: IProduct[] = [];
  carts: any = this.cartService.getCart();

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService,
    private router: Router,
    private authServies: AuthService
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data.product;
    });
  }
  onAddCart(product: any) {
    let idx = this.carts.findIndex((item: any) => {
      return item.id == product._id;
    });

    if (idx >= 0) {
      this.carts[idx].quantity += 1;
    } else {
      let cartItem: any = {
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        subtotal: function () {
          return this.price * this.quantity;
        },
      };
      this.carts.push(cartItem);
    }
    // lưu vào localStorage
    this.cartService.saveCart(this.carts);
    this.toastr.success('Thêm giỏ hàng thành công❤️', 'Thành công');

    console.log(this.carts[0].subtotal());
  }
}
