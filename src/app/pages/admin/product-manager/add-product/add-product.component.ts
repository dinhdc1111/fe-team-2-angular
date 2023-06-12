import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ICategory } from 'src/app/interfaces/category';
import { ProductService } from 'src/app/services/product.service';
import { CategoriesService } from 'src/app/services/services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Validator } from '@angular/forms';
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
    private categoriesService: CategoriesService,
    private toastor: ToastrService,
    private router: Router) {
    this.getCategories()
  }

  onSubmit() {
    this.productService.create(this.product).subscribe(data => {
      console.log(data);
      this.toastor.success('Thêm sản phẩm thành công', 'Thành công');
      this.router.navigate(['/admin/list'])
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
