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
  status: any;
  isUpdated: boolean = false;
  updateReqSent : boolean = false;
  isDeleted : boolean = false;

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

  async handleUpdate(){
    console.log(this.discountData); // before sending to the service
    this.updateReqSent = true;
    this.status = await this.bookService.updateDiscount(this.discountData);
    console.log(this.status);

    //if(this.status == "Success"){
      this.isUpdated = true;
    //}
  }

  async handleDelete(id: any){
    this.bookService.getDiscountById(id)
    .subscribe( ( res: any) => {
      console.log(res);
      this.discountData = res
    })
    await this.delay(50); 

    this.bookService.deleteDiscount(this.discountData);
    this.isDeleted = true;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
