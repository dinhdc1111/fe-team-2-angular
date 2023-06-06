import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/client/home/home.component';
import { SigninComponent } from './pages/client/auth/signin/signin.component';
import { SignupComponent } from './pages/client/auth/signup/signup.component';
import { ProductListComponent } from './pages/client/product-list/product-list.component';
import { ClientLayoutComponent } from './pages/layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "", component: ClientLayoutComponent, children: [
      {path: "", component: HomeComponent},
      {path: "signin", component: SigninComponent},
      {path: "signup", component: SignupComponent},
      {path: "products", component: ProductListComponent},
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      {path: "", component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
