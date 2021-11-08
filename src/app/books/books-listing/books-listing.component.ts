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
  booksSubscription: Subscription | undefined = undefined;

  constructor(private bookService: BookService, private cartDataService: CartDataService) { }

  async ngOnInit(): Promise<void> {
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

  handleAddToCart(pdt: any): void {
    console.log(pdt);
    console.log("handleAddToCart")
    this.cartDataService.updateCart(pdt);
  }
}
