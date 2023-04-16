import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit, OnDestroy {

  constructor(private data:DataService) { 
  }

  getQuiz$:any;
  quizItem:any;

  ngOnInit(): void {
    this.data.print();
    this.getQuiz$ = this.data.getQuiz().subscribe((data)=>{
      console.log(data);
      this.quizItem = JSON.stringify(data);
    })
  }

  ngOnDestroy(): void {
    this.getQuiz$.unsubscribe();
  }

}
