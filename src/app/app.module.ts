import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { BooksListingComponent } from './books/books-listing/books-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
