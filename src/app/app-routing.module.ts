import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './admin/admin-books/add-book/add-book.component';

import { AdminBooksComponent } from './admin/admin-books/admin-books.component';
import { EditBookComponent } from './admin/admin-books/edit-book/edit-book.component';
import { AddCategoryComponent } from './admin/admin-categories/add-category/add-category.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { EditCategoryComponent } from './admin/admin-categories/edit-category/edit-category.component';
import { AddCouponComponent } from './admin/admin-coupons/add-coupon/add-coupon.component';
import { AdminCouponsComponent } from './admin/admin-coupons/admin-coupons.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminPasswordComponent } from './admin/admin-password/admin-password.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { AddUserComponent } from './auth/components/add-user/add-user.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { SignoutComponent } from './auth/components/signout/signout.component';
import { BooksDetailsComponent } from './books/books-details/books-details.component';
import { BooksListingComponent } from './books/books-listing/books-listing.component';
import { FeaturedComponent } from './books/featured/featured.component';
import { NewComponent } from './books/new/new.component';
import { SearchComponent } from './books/search/search.component';
import { CartComponent } from './cart/cart.component';
import { CouponsComponent } from './coupons/coupons.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { TestuserComponent } from './testuser/testuser.component';
import { UseraddressComponent } from './testuser/useraddress/useraddress.component';
import { UserpasswordComponent } from './testuser/userpassword/userpassword.component';
import { UserprofileComponent } from './testuser/userprofile/userprofile.component';
import { ViewordersComponent } from './testuser/vieworders/vieworders.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: '', component: HomeComponent }, 
  { path: 'books', component: BooksListingComponent },
  { path: 'books/:id', component: BooksDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component:DashboardComponent },
  { path: 'admin-dashboard', component:DashboardComponent },
  { path: 'admin-orders', component:AdminOrdersComponent },
  { path: 'admin-books', component: AdminBooksComponent},
  { path: 'admin-books/add', component: AddBookComponent},
  { path: 'admin-books/:id', component: EditBookComponent},
  { path: 'admin-users', component:AdminUsersComponent },
  { path: 'admin-categories', component:AdminCategoriesComponent },
  { path: 'admin-categories/add', component:AddCategoryComponent },
  { path: 'admin-categories/:id', component:EditCategoryComponent },
  { path: 'admin-coupons', component:AdminCouponsComponent },
  { path: 'admin-coupons/add', component:AddCouponComponent },
  { path: 'admin-password', component:AdminPasswordComponent },
  { path: 'featured', component:FeaturedComponent },
  { path: 'new', component:NewComponent },
  { path: 'coupons', component:CouponsComponent },
  { path: 'search', component:SearchComponent },
  { path: 'signup', component: AddUserComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signout', component: SignoutComponent },
  { path: 'forbidden', component: ForbiddenComponent},//, canActivate:[AuthGuard] },
  { path: 'users', component: UsersComponent , canActivate:[AuthGuard] },
  // { path: 'adminpanel', component: AdminPanelComponent , canActivate:[AuthGuard] , data:{roles:['Admin']} },
  { path: 'profile', component:UserprofileComponent }, //update to user after integration 
  { path: 'address', component:UseraddressComponent }, //update to user after integration 
  { path: 'orders', component:ViewordersComponent }, //update to user after integration 
  { path: 'change-password', component:UserpasswordComponent }, //update to user after integration 
  { path: 'book-details', component:BooksDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
