import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/books/services/book.service';

@Component({
  selector: 'app-admin-coupons',
  templateUrl: './admin-coupons.component.html',
  styleUrls: ['./admin-coupons.component.scss']
})
export class AdminCouponsComponent implements OnInit {

  discountList: any[] = [];
  discountData: any;
  discountsSubscription: Subscription | undefined = undefined;
  isUpdated: boolean = false;

  constructor( private bookService: BookService ) { }

  ngOnInit(): void {
    this.discountsSubscription = this.bookService.getDiscounts()
    .subscribe( (res: any) => {
      this.discountList = res;
    });


  }

  handleEditDiscountModal(id: any){
    this.bookService.getDiscountById(id)
    .subscribe( ( res: any) => {
      console.log(res);
      this.discountData = res
    })
    this.isUpdated = false;
  }

}
