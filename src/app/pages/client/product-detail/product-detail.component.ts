import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product: any = {};
  carts: any = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.productService.getProductById(id!).subscribe((product) => {
        this.product = product;
        console.log(this.product.product.name);
      });
    });
  }

  onAddCart(product: any) {
    //console.log(product);
    let cartItem: any = {
      id: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 2,
      subtotal: function () {
        return this.price * this.quantity;
      },
    };
    this.carts.push(cartItem);
    console.log(this.carts);
  }
}
