import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { diaryFormat } from '../diary_format';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  content: any;
  a:diaryFormat = JSON.parse(localStorage.getItem('diaries'));

  constructor(private route: ActivatedRoute, private router: Router)  { 
    this.content = this.a[parseInt(this.route.snapshot.paramMap.get('index'))];
  }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(['/']);
  }

}
