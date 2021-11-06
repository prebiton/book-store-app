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
