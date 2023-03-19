import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddBookReactiveComponent } from './components/add-book-reactive/add-book-reactive.component';

const routes: Routes = [
  { path: '', component: AllBooksComponent },
  { path: 'new', component: AddBookComponent },
  { path: 'new-reactive', component: AddBookReactiveComponent },
  {
    path: ':id',
    component: BookDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
