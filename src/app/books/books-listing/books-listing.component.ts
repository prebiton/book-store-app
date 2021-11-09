import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { CartDataService } from 'src/app/cart/services/cart-data.service';

@Component({
  selector: 'app-books-listing',
  templateUrl: './books-listing.component.html',
  styleUrls: ['./books-listing.component.scss']
})
export class BooksListingComponent implements OnInit {

  bookList: any[] = [];
  enabledBookList: any[] = [];
  userList: any[] = [];
  cartList: any[] = [];
  cartItem: any = {
    cartTempId : 0,
    UserId: 1,
    BId: 1,
    BQty: 1
  }
  username: any;
  userid : any;
  isPresent : boolean = false;

  booksSubscription: Subscription | undefined = undefined;

  constructor(private bookService: BookService, private cartDataService: CartDataService) { }

  async ngOnInit(): Promise<void> {
    this.username = localStorage.getItem('userName');
    this.bookService.getUsers()
      .subscribe( (res: any) => {
        console.log(res);
        this.userList = res
      })
      await this.delay(50); 
      for(var i = 0; i < this.userList.length; i++){
        console.log(this.userList[i].UName)
        if (this.username == this.userList[i].UName){
          this.userid = this.userList[i].Id; 
        }
      }
      console.log(this.userid);
    this.booksSubscription = this.bookService.getBooks()
    .subscribe( (res: any) => {
      this.bookList = res;
    });
    await this.delay(50);
    for (var i = 0; i < this.bookList.length; i++){
      if( this.bookList[i].BStatus == true ){
        this.enabledBookList.push(this.bookList[i])
      }
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async handleAddToCart(book: any): Promise<void> {
    console.log(book);
    console.log("handleAddToCart")
    //this.cartDataService.updateCart(book);
    console.log(this.userid);
    this.cartItem.UserId = this.userid;
    this.cartItem.BId = book.BId;

    console.log(this.cartItem);

    this.bookService.getCart()
      .subscribe( (res: any) => {
        console.log(res);
        this.cartList = res
      })
    await this.delay(50); 
    for(var i = 0; i < this.cartList.length ; i++) {
      if(this.cartList[i].UserId == this.cartItem.UserId){
        if(this.cartList[i].BId == this.cartItem.BId){
          console.log(this.cartItem);
          console.log(this.cartList[i]);
          this.cartItem.cartTempId = this.cartList[i].CartId;
          this.cartItem.BQty = this.cartList[i].BQty + 1;
          this.bookService.updateCart(this.cartItem);
          this.isPresent = true;
        }
      }
    }
    if(!this.isPresent){
      console.log(this.cartItem);
      this.bookService.createCart(this.cartItem)
      .subscribe( (res: any) => { // 3. get the resp from the service
        //if(res == "Success"){
        //}

      });
    }
    //this.bookService.createCart(this.cartItem)
      //.subscribe( (res: any) => { // 3. get the resp from the service

        //this.reqSent = true;
        //console.log(this.isSaved);
        //this.errorMessage = res;
        //if(res == "Success"){
          //this.isSaved = true;
        //}
        //console.log(this.isSaved);

      //});
  }
}
