import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { AllBooksComponent } from './component/all-books/all-books.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllBooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
