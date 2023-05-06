import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from './d'

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit, OnDestroy {
  @ViewChild('question') questionElem?: ElementRef;

  constructor(private data:DataService) { 
  }

  getQuiz$:any;
  quizQuestions:any;

  ngOnInit(): void {
    this.data.print();
    this.getQuiz$ = this.data.getQuiz().subscribe((data)=>{
     this.quizQuestions = data;
    })
  }
  ngAfterViewInit(){
    console.log(this.questionElem?.nativeElement);
  } 
  checkAnswers(e:any){
    console.log("Use details from event, ", e);
    }

  ngOnDestroy(): void {
    this.getQuiz$.unsubscribe();
  }

}
