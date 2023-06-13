import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  categorylist: any =[];
  constructor(
    private categoryService: CategoryService
  ) {

  }

  ngOnInit(){
    this.categoryService.getAll().subscribe((data) => {
      this.categorylist = data.datas;
      console.log(data);

    }, error => console.log(error.message))
  }
  delete(id: string) {
    const confirmed = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
  if (confirmed) {
    this.categoryService.remove(id).subscribe(() => {
      this.categorylist = this.categorylist.filter((category:any) => category._id !== id);
    });
  }
  }
}
