import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private _httpClient: HttpClient) { }

  public addBook(bookModel: BookModel): void {

  }

  public getBooks(): Observable<BookModel[]> {
    return this._httpClient.get<BookModel[]>('https://localhost:7190/api/books')
  }
}
