import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  category: ICategory = {
    name: '',
  };
  cateForm = this.formBuilder.group({
    name: ['', [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private routers: Router,
    private CategoryService: CategoryService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe((params) => {
      const id = params.get('id');

      this.CategoryService.update(id).subscribe(
        (data) => {
          this.category = data;
          console.log(data)
          this.cateForm.patchValue({
            name: data.name,
          });
        },
        (error) => console.log(error.message)
      );
    });
  }
  get validate() {
    return this.cateForm.controls
  }
  onHandleSubmit() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      const cate: ICategory = {
        _id: id,
        name: this.cateForm.value.name || ''
      };
      if (this.cateForm.valid) {
        this.CategoryService.update(cate).subscribe((cate: any) => {
          alert(`Sửa sản phẩm thành công`);
          this.routers.navigate(['/admin/listCate'])
        });
      }
    }

  }
}
