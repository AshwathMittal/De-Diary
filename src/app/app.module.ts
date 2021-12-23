import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Book } from './book/book.component';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReaderComponent } from './reader/reader.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    Book,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutosizeModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
