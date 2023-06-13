import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './pages/layouts/client-layout/client-layout.component';
import { HomeComponent } from './pages/client/home/home.component';
import { SigninComponent } from './pages/client/auth/signin/signin.component';
import { SignupComponent } from './pages/client/auth/signup/signup.component';
import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { DashboardManagerComponent } from './pages/admin/dashboard-manager/dashboard-manager.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ListProductComponent } from './pages/admin/product-manager/list-product/list-product.component';
import { AuthGuard } from './auth.guard';
import { CartPageComponent } from './pages/client/cart/cart-page/cart-page.component';
import { PayComponent } from './pages/client/pay/pay.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'pay', component: PayComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [{ path: '', component: DashboardManagerComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
