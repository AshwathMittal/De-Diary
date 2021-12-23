import { Component} from '@angular/core';
import { diaryFormat } from '../diary_format';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent  {
  diaries: diaryFormat[];
  a:boolean = localStorage.getItem('diaries') != null;
  constructor() { 
    console.log(this.a);
    
  if(this.a){
    this.diaries = JSON.parse(localStorage.getItem('diaries')).reverse();
  }
  else{
    this.diaries = [];
  }
}
delDiaries(index){
  this.diaries.splice(index,1);
  localStorage.setItem('diaries', JSON.stringify(this.diaries));
  if(this.diaries.length == 0){
    localStorage.removeItem('diaries');
  }
}
} 
