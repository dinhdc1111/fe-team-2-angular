import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { CategoriesService } from 'src/app/services/services/categories.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  categories: any[] = []
  products: IProduct[] = [];
  constructor(private productService: ProductService,
    private categoriesService: CategoriesService,
    private toastor: ToastrService
  ) {
    this.getCategory()
  }
  getList() {
    this.productService.getAll().subscribe(data => {

      this.products = data.product
      // console.log(this.products)
    })
  }
  ngOnInit() {
    this.getList()
  }

  handleDelete(id: string): void {
    this.productService.remove(id).subscribe(item => {
      // console.log(item)
      this.getList()
      this.toastor.success('Xóa sản phẩm thành công', 'Thành công');
    })
  }

  getCategory() {
    this.categoriesService.getAllCategories().subscribe(data => {
      // console.log(data)
    })
  }

}
