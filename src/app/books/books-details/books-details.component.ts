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
  booksSubscription: Subscription | undefined = undefined;

  constructor( private bookService: BookService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
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

}
