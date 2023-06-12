import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { CategoriesService } from 'src/app/services/services/categories.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  categorise: any[] = [];
  productForm = this.formBuilder.group({
    name: [''],
    image: [''],
    original_price: [0],
    price: [0],
    description: [''],
    categoryId: ['']

  })

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private toastor: ToastrService,
    private router: Router) {
    this.getCategories()
    this.route.paramMap.subscribe(param => {
      const id = param.get('id')
      console.log(id)
      this.productService.getByID(id!).subscribe(item => {
        console.log(item)
        this.productForm.patchValue({
          name: item.product.name,
          original_price: item.product.original_price,
          price: item.product.price,
          image: item.product.image,
          description: item.product.description,
          categoryId: item.product.categoryId
        })
      })
    })
  }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe(data => {
      // console.log(data);
      this.categorise = data.datas;
      // console.log(this.categorise);
    })
  }

  onsubmit() {
    const product = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      original_price: this.productForm.value.original_price || 0,
      image: this.productForm.value.image || '',
      description: this.productForm.value.description || '',
      categoryId: this.productForm.value.categoryId || ''
    }
    this.route.paramMap.subscribe(param => {
      const id = param.get('id')
      if (id)
        this.productService.Update(id, product).subscribe(item => {
          console.log(item)
          this.toastor.success('Update sản phẩm thành công', 'Thành công');
          this.router.navigate(['/admin/list'])
        })
    })
    console.log(1);
  }



}
