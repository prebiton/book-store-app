import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private REST_API_URL = 'http://localhost:60494/api/book/'
  private catAPIURL = 'http://localhost:60494/api/category/'

  constructor( private http: HttpClient) { }

  createBook( bookData: any ): any { // 1. get the form data from comp ts 
    console.log(bookData);
    bookData.BImgPath = bookData.BImgPath.replace("C:\\fakepath\\", "../../../assets/images/");
    // 2. send the form data to the REST API 
    // 2.1 What's the REST API? https://jsonplaceholder.typicode.com/users/ 
    // 2.2 What's the HTTP Method? POST
    // 2.3 What's the REST API Client? HttpClient
    return this.http.post(this.REST_API_URL, bookData)
      .pipe( map( (res: any) => { // 3. get the resp from the REST API
        console.log(res);
        // 4. send the resp to the comp ts
        return res;
      }));
  }

  getBooks(): Observable<any[]> {
    return this.http.get(this.REST_API_URL)
        .pipe( map( (res: any) => {
          console.log(res);
          return res;
        }));
  }

  getBookById( id: string | null ): any { 
    let APIUrl = this.REST_API_URL + id; 

    return this.http.get(APIUrl)
      .pipe(map( (res: any) => {
        return res;
      }));
  }

  getCategories(): Observable<any[]> {
    return this.http.get(this.catAPIURL)
        .pipe( map( (res: any) => {
          console.log(res);
          return res;
        }));
  }
}
