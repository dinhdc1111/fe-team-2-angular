import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formSignup = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: this.checkPassword }
  );

  // constructor(private fb: FormBuilder, private authServies: AuthService) {}
  constructor(
    private fb: FormBuilder,
    private authServies: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }
  onHandleSubmit() {
    if (this.formSignup.valid) {
      const user: IUser = {
        name: this.formSignup.value.name || '',
        email: this.formSignup.value.email || '',
        password: this.formSignup.value.password || '',
        confirmPassword: this.formSignup.value.confirmPassword || '',
      };
      console.log(this.formSignup.value);
      this.authServies.signup(user).subscribe(
        (response: any) => {
          this.toastr.success(
            response.message,
            'Vui lòng đăng nhập để sử dụng hệ thống'
          );
          this.router.navigate(['/signin']);
        },

        (error: any) => {
          this.toastr.error(error.error.message);
        }
      );
    }
  }
}
