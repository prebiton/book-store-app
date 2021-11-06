import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminBooksComponent } from './admin/admin-books/admin-books.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminCouponsComponent } from './admin/admin-coupons/admin-coupons.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminPasswordComponent } from './admin/admin-password/admin-password.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BooksDetailsComponent } from './books/books-details/books-details.component';
import { BooksListingComponent } from './books/books-listing/books-listing.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'books', component: BooksListingComponent },
  { path: 'books/:id', component: BooksDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component:DashboardComponent },
  { path: 'admin-dashboard', component:DashboardComponent },
  { path: 'admin-orders', component:AdminOrdersComponent },
  { path: 'admin-books', component: AdminBooksComponent},
  { path: 'admin-users', component:AdminUsersComponent },
  { path: 'admin-categories', component:AdminCategoriesComponent },
  { path: 'admin-coupons', component:AdminCouponsComponent },
  { path: 'admin-password', component:AdminPasswordComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
