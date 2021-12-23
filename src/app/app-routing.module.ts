import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Book } from './book/book.component';
import { BooksListComponent } from './books-list/books-list.component';
import { ReaderComponent } from './reader/reader.component';
const routes: Routes = [
  { path: 'add', component: Book },
  { path: '', component: BooksListComponent },
  { path: 'read/:index', component: ReaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
