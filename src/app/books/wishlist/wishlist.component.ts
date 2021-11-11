import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/cart/services/cart-data.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  
  wishItemList: any[] = [];
  personalWishItemList : any[] = [];
  userList : any[] = [];
  username: any;
  userid: any;

  constructor(private bookService: BookService, private cartDataService: CartDataService) { }

  async ngOnInit(): Promise<void> {
    // this.cartDataService.latestCartItemsList.subscribe((cartItems: any[] | undefined) => {
    //   console.log(cartItems);
    //   this.cartItemList = cartItems;
    // });

    this.username = localStorage.getItem('userName');
    this.bookService.getUsers()
      .subscribe( (res: any) => {
        console.log(res);
        this.userList = res
      })
      await this.delay(200); 
      for(var i = 0; i < this.userList.length; i++){
        console.log(this.userList[i].UName)
        if (this.username == this.userList[i].UName){
          this.userid = this.userList[i].Id; 
        }
      }

    this.bookService.getWish()
    .subscribe( (res: any) => {
      this.wishItemList = res;
      console.log(this.wishItemList);
    });

    await this.delay(200); 

    for(var i = 0; i < this.wishItemList.length; i++){
      console.log(this.userid);
      console.log(this.wishItemList[i].UserId);
      if( this.wishItemList[i].UserId == this.userid){
        console.log(this.wishItemList[i]);
        this.personalWishItemList.push(this.wishItemList[i]);
      }
    }
    console.log(this.personalWishItemList);
    
  }



  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  
  handleRemoveFromWish(pdt: any): void {
    console.log(pdt);
    console.log("handleRemoveFromWish")
    this.bookService.deleteWish(pdt);
  }
}
