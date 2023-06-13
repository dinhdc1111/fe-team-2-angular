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
            localStorage.setItem('userInfo', JSON.stringify(response));

            // Chuyển hướng đến trang Home
            this.router.navigate(['/']);
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
