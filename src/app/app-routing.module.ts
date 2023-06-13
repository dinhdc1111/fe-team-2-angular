import { AddProductComponent } from './pages/admin/product-manager/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './pages/layouts/client-layout/client-layout.component';
import { HomeComponent } from './pages/client/home/home.component';
import { SigninComponent } from './pages/client/auth/signin/signin.component';
import { SignupComponent } from './pages/client/auth/signup/signup.component';
import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { DashboardManagerComponent } from './pages/admin/dashboard-manager/dashboard-manager.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { AuthGuard } from './auth.guard';
import { CartPageComponent } from './pages/client/cart/cart-page/cart-page.component';
import { PayComponent } from './pages/client/pay/pay.component';

import { EditProductComponent } from './pages/admin/product-manager/edit-product/edit-product.component';
import { ListProductComponent } from './pages/admin/product-manager/list-product/list-product.component';
import { AddCategoryComponent } from './pages/admin/category-manager/add-category/add-category.component';
import { ListCategoryComponent } from './pages/admin/category-manager/list-category/list-category.component';
import { EditCategoryComponent } from './pages/admin/category-manager/edit-category/edit-category.component';
import { ListUserComponent } from './pages/admin/users/list-user/list-user.component';
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
    children: [
      { path: '', component: DashboardManagerComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'list', component: ListProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
      { path: 'addCate', component: AddCategoryComponent },
      { path: 'listCate', component: ListCategoryComponent },
      { path: 'editCate/:id', component: EditCategoryComponent },
      {path: 'listUser',component:ListUserComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
