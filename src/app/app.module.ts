import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './components/admin/admin-footer/admin-footer.component';
import { ClientHeaderComponent } from './components/client/client-header/client-header.component';
import { ClientFooterComponent } from './components/client/client-footer/client-footer.component';
import { ClientMenuComponent } from './components/client/client-menu/client-menu.component';
import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './pages/layouts/client-layout/client-layout.component';
import { AboutComponent } from './pages/client/about/about.component';
import { ContactComponent } from './pages/client/contact/contact.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { SigninComponent } from './pages/client/auth/signin/signin.component';
import { SignupComponent } from './pages/client/auth/signup/signup.component';
import { DashboardManagerComponent } from './pages/admin/dashboard-manager/dashboard-manager.component';
import { AddProductComponent } from './pages/admin/product-manager/add-product/add-product.component';
import { ListProductComponent } from './pages/admin/product-manager/list-product/list-product.component';
import { EditProductComponent } from './pages/admin/product-manager/edit-product/edit-product.component';
import { AddCategoryComponent } from './pages/admin/category-manager/add-category/add-category.component';
import { EditCategoryComponent } from './pages/admin/category-manager/edit-category/edit-category.component';
import { ListCategoryComponent } from './pages/admin/category-manager/list-category/list-category.component';
import { ProductListComponent } from './pages/client/product-list/product-list.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    ClientHeaderComponent,
    ClientFooterComponent,
    ClientMenuComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductDetailComponent,
    SigninComponent,
    SignupComponent,
    DashboardManagerComponent,
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ListCategoryComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
