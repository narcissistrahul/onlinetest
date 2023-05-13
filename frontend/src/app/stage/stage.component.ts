import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from './d'

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})


export class StageComponent implements OnInit, OnDestroy {

  @Output() newItemEvent = new EventEmitter<string>();

  answers:any = [];
  getQuiz$:any;
  quizQuestions:any;

  constructor(private data:DataService) { 
  }

  ngOnInit(): void {
    this.data.print();
    this.getQuiz$ = this.data.getQuiz().subscribe((data)=>{
     this.quizQuestions = data;
    })
  }
  ngAfterViewInit(){}
  
  addNewItem(question:number, answer: string) {
    var pair = {question:question, answer:answer}
var answerRepeated = false;
var repeatedQuestion = 0;
var repeatedIndex = 0;

    this.answers.forEach((element:any, index:any) => {
      
      if (element.question == question){
        answerRepeated = true;
        repeatedIndex = index;
        repeatedQuestion = element.question
      }
    });
    console.log(this.answers)
    if (answerRepeated) {
      this.answers[repeatedIndex] = pair;
    }
    else{
      this.answers.push(pair);
    }
  }
  
  checkAnswers(e:any){
    //console.log("Use details from event, ", e);
    }

  ngOnDestroy(): void {
    this.getQuiz$.unsubscribe();
  }

}
