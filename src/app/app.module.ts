import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ProductListComponent } from './pages/client/product-list/product-list.component';
import { AboutComponent } from './pages/client/about/about.component';
import { ContactComponent } from './pages/client/contact/contact.component';
import { SigninComponent } from './pages/client/auth/signin/signin.component';
import { SignupComponent } from './pages/client/auth/signup/signup.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddProductComponent } from './pages/admin/product-manager/add-product/add-product.component';
import { ListProductComponent } from './pages/admin/product-manager/list-product/list-product.component';
import { EditProductComponent } from './pages/admin/product-manager/edit-product/edit-product.component';
import { AddCategoryComponent } from './pages/admin/category-manager/add-category/add-category.component';
import { ListCategoryComponent } from './pages/admin/category-manager/list-category/list-category.component';
import { EditCategoryComponent } from './pages/admin/category-manager/edit-category/edit-category.component';
import { AdminFooterComponent } from './components/admin/admin-footer/admin-footer.component';
import { ClientMenuComponent } from './components/client/client-menu/client-menu.component';
import { ClientSlideComponent } from './components/client/client-slide/client-slide.component';
import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './pages/layouts/client-layout/client-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductListComponent,
    AboutComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    AdminFooterComponent,
    ClientMenuComponent,
    ClientSlideComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
