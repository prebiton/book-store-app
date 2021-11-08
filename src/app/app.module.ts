import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { BooksListingComponent } from './books/books-listing/books-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksDetailsComponent } from './books/books-details/books-details.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminBooksComponent } from './admin/admin-books/admin-books.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminCouponsComponent } from './admin/admin-coupons/admin-coupons.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminPasswordComponent } from './admin/admin-password/admin-password.component';
import { FeaturedComponent } from './books/featured/featured.component';
import { NewComponent } from './books/new/new.component';
import { SearchComponent } from './books/search/search.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AddBookComponent } from './admin/admin-books/add-book/add-book.component';
import { AddUserComponent } from './auth/components/add-user/add-user.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { SignoutComponent } from './auth/components/signout/signout.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './auth/services/user.service';
import { AuthGuard } from './auth/auth.guard';
import { CouponboxComponent } from './home/couponbox/couponbox.component';
import { FeatureboxComponent } from './home/featurebox/featurebox.component';
import { LinkboxComponent } from './home/linkbox/linkbox.component';
import { EditBookComponent } from './admin/admin-books/edit-book/edit-book.component';
import { CouponsComponent } from './coupons/coupons.component';
import { HeadingsComponent } from './shared/headings/headings.component';
import { AddCategoryComponent } from './admin/admin-categories/add-category/add-category.component';
import { EditCategoryComponent } from './admin/admin-categories/edit-category/edit-category.component';
import { TestuserComponent } from './testuser/testuser.component';
import { UserprofileComponent } from './testuser/userprofile/userprofile.component';
import { UseraddressComponent } from './testuser/useraddress/useraddress.component';
import { ViewordersComponent } from './testuser/vieworders/vieworders.component';
import { UserpasswordComponent } from './testuser/userpassword/userpassword.component';
import { AddCouponComponent } from './admin/admin-coupons/add-coupon/add-coupon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BooksListingComponent,
    BooksDetailsComponent,
    CartComponent,
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    AdminOrdersComponent,
    AdminBooksComponent,
    AdminUsersComponent,
    AdminCouponsComponent,
    AdminCategoriesComponent,
    AdminPasswordComponent,
    FeaturedComponent,
    NewComponent,
    SearchComponent,
    FooterComponent,
    AddBookComponent,
    AddUserComponent,
    SigninComponent,
    SignoutComponent,
    UsersComponent,
    ForbiddenComponent,
    SignoutComponent,
    CouponboxComponent,
    FeatureboxComponent,
    LinkboxComponent,
    EditBookComponent,
    CouponsComponent,
    HeadingsComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    TestuserComponent,
    UserprofileComponent,
    UseraddressComponent,
    ViewordersComponent,
    UserpasswordComponent,
    AddCouponComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
