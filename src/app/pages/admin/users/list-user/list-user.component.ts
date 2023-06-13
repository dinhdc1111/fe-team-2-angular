import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  users:any = [];
  constructor(private AuthService:AuthService){
    this.AuthService.getUser().subscribe((data)=>{
      this.users = data.data
      console.log(data);
      
    },error => {
      console.log(error.message);

    })
  }
  removeItem(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result)=>{
      if(result.isConfirmed){
        this.AuthService.removeUser(id).subscribe(() =>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          const newUser = this.users.filter((user:any)=> user._id != id);
          this.users = newUser
        },error => {
          console.log(error.message);
        })
      }else if (result.dismiss === Swal.DismissReason.cancel) {
        // Hiển thị thông báo hủy xóa sản phẩm
        Swal.fire(
          'Cancelled',
          'Your user is safe :)',
          'error'
        )
      }
    })
  }
}
