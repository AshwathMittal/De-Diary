import { Component } from "@angular/core";
import { diaryFormat } from "../diary_format";
import { Router } from "@angular/router";
@Component({
    selector: "book",
    templateUrl: './book.html',
    styleUrls: ['./book.component.css']
})

export class Book{
    lol = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    story: string ='Hello there, Start Typing';
    date: number = new Date().getDate();; 
    day: string = this.days[new Date().getDay()];
    month: string = this.lol[new Date().getMonth()];
    year: number = new Date().getFullYear();
    hour: any = new Date().getHours();
    name: string;
    book: diaryFormat[];
    constructor(private route: Router) {
        var a = localStorage.getItem('diaries');
        if(a!=null)
        {
            this.book = JSON.parse(a);
            this.name = JSON.parse(a).reverse()[0].name;
        }
        else{
            this.name = "Anonymous";
            this.book = [];
        }
        if(this.hour >=13){
            this.hour = this.hour - 12 + ' PM';
        }
        else if(this.hour == 0){
            this.hour = 12 + ' AM';
        }
        else{
            this.hour = this.hour + ' AM';
        }
    }
    AddDiary(){
        const newBook = {
            story: this.story,
            date: this.date,
            day: this.day,
            month: this.month,
            year: this.year,
            hour: this.hour,
            name: this.name
        };
        this.book.push(newBook);
        localStorage.setItem('diaries', JSON.stringify(this.book));
        this.route.navigate(['/']);
    }
}