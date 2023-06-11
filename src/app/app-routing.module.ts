import { AddProductComponent } from './pages/admin/product-manager/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './pages/layouts/client-layout/client-layout.component';
import { HomeComponent } from './pages/client/home/home.component';
import { SigninComponent } from './pages/client/auth/signin/signin.component';
import { SignupComponent } from './pages/client/auth/signup/signup.component';
import { ProductListComponent } from './pages/client/product-list/product-list.component';
import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { DashboardManagerComponent } from './pages/admin/dashboard-manager/dashboard-manager.component';
import { EditProductComponent } from './pages/admin/product-manager/edit-product/edit-product.component';
import { ListProductComponent } from './pages/admin/product-manager/list-product/list-product.component';
const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'products', component: ProductListComponent },
    ],
  },
  {
    path: 'admin', component: AdminLayoutComponent,
    children: [
      { path: '', component: DashboardManagerComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'list', component: ListProductComponent },
      { path: 'edit/:id', component: EditProductComponent }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
