import { Component, OnInit } from '@angular/core';
import { Counter2Service } from 'src/app/shared/services/counter2.service';
import { BookModel } from '../../model/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  public books: BookModel[] = [];

  constructor(public bookService: BookService, public _counterService: Counter2Service) {  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }

  public increase(): void{
    this._counterService.incCounter();
  }

  public decrease(): void{
    this._counterService.decCounter();
  }

}
