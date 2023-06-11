import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ICategory } from 'src/app/interfaces/category';
import { ProductService } from 'src/app/services/product.service';
import { CategoriesService } from 'src/app/services/services/categories.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  categorise: any[] = []
  product: IProduct = {
    name: "",
    price: 0,
    original_price: 0,
    image: "",
    description: "",
    categoryId: ""
  }

  constructor(private productService: ProductService,
    private categoriesService: CategoriesService) {
    this.getCategories()
  }

  onSubmit() {
    this.productService.create(this.product).subscribe(data => {
      console.log(data);

    })
  }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe(data => {
      // console.log(data);
      this.categorise = data.datas;
      console.log(this.categorise);
    })
  }
}
