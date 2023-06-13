import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private CategoryService: CategoryService
  ) {

  }
  cateForm = this.formBuilder.group({
    "name": ['', [Validators.required]],
  });
  get validate(){
    return this.cateForm.controls
  }
  onHandleSubmit() {
    const cate: ICategory = {
      name: this.cateForm.value.name || ''
    };
    if(this.cateForm.valid){
      this.CategoryService.create(cate).subscribe((cate:any) => {
        alert(`Thêm danh mục thành công`);
        this.router.navigate(['/admin/listCate'])
      });
    }
  }
}
