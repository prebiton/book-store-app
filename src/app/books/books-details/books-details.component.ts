import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent implements OnInit {

  bookData: any;
  categoryList: any[] = []
  userList: any[] = []
  booksSubscription: Subscription | undefined = undefined;
  username: any;
  userid : any;
  bookList: any[] = [];
  enabledBookList: any[] = [];
  cartList: any[] = [];
  cartItem: any = {
    cartTempId : 0,
    UserId: 1,
    BId: 1,
    BQty: 1
  }
  isPresent : boolean = false;

  constructor( private bookService: BookService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.username = localStorage.getItem('userName');
    this.bookService.getUsers()
      .subscribe( (res: any) => {
        console.log(res);
        this.userList = res
      })
      await this.delay(200); 
      for(var i = 0; i < this.userList.length; i++){
        //console.log(this.userList[i].UName)
        if (this.username == this.userList[i].UName){
          this.userid = this.userList[i].Id; 
        }
      }
      console.log(this.userid);
    //console.log("username");
    //console.log(this.username);
    let bookId = this.route.snapshot.paramMap.get('id');

    this.bookService.getBookById(bookId)
      .subscribe( ( res: any) => {
        console.log(res);
        this.bookData = res
      })
    await this.delay(20);  
    this.booksSubscription = this.bookService.getCategories()
      .subscribe( (res: any) => {
        console.log(res);
        this.categoryList = res
        for (var i = 0; i < this.categoryList.length; i++) {
          console.log("hmm");
          if (this.bookData.BCatId == this.categoryList[i].CatId){
            this.bookData.BCat = this.categoryList[i].CatName
            console.log(this.bookData.BCat)
          }
        }
      });

    
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
  }
}
