import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  constructor(
    private fb: FormBuilder,
    private authServies: AuthService,
    private toastor: ToastrService,
    private router: Router
  ) {}

  formSignin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onHandleSubmit() {
    if (this.formSignin.valid) {
      const user = {
        email: this.formSignin.value.email || '',
        password: this.formSignin.value.password || '',
      };
      console.log(this.formSignin.value);

      this.authServies.signin(user).subscribe(
        (response: any) => {
          console.log(response);

          if (!response.user) {
            this.toastor.success(response.message);
          } else {
            // Lưu ng dùng vào localStorage
            // const token = response.accessToke;
            // localStorage.setItem('accessToke', token);
            // localStorage.setItem('role', response?.user?.role);

            localStorage.setItem('userInfo', JSON.stringify(response));

            // Chuyển hướng đến trang Home
            this.router.navigate(['/']);

            // if (response.user.role === 'admin') {
            //   console.log('admin');
            //   this.toastor.success(response.message);
            // } else {
            //   console.log('member');
            //   this.toastor.success(response.message);
            // }
          }
        },
        // Thông báo lỗi
        (error: any) => {
          this.toastor.error(error.error.message);
        }
      );
    }
  }
}
