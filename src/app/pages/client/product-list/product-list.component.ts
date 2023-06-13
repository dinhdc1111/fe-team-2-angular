import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  searchTerm: string = '';
  products: IProduct[] = [];
  allProducts: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe((data) => {
      this.products = data.product;
      this.allProducts = data.product;
    });
  }
  searchProduct() {
    this.products = this.allProducts.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
