import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 100, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 100, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class QuizComponent implements OnInit {

  quizList:any;
  results:any;
  data:any;
  current:any;
  end:any;
  pushResults:any;
  info: any;
  restart: any;
  getQuizList$: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    this.getQuizList$ = this.dataService.getQuizList().subscribe((data:any)=>{
      this.quizList = data;
     })
  
    this.results  = [];
    this.data     = [];     // ng-model="data[current].userChoice" - save each answer to array 
    this.current  = 0;      // iterate questions
    this.end      = false;  // end state
  
    /**
     * @param item     - current object from quizList - {object}
     * @param answer   - current answer               - {string}
     */
    this.pushResults = (event:any,item:any, answer:any) => {
      // push
      this.results.push({
        question: item.question,
        answer: answer,
        correct: answer == item.correct
      });
      // mark as done
      this.quizList[this.current].done = true;
      // go next
      this.current++;
      if (this.current >= this.quizList.length) {
        this.end = true;
      }
  
/*       this.info (
        'results:', this.results, '\t|',
        'data: ', this.data, '\t|',
        'quizList:', this.quizList
      ) */
    };
  
    this.restart = function() {
      this.results = [];
      this.data = {};
      this.current = 0;
      this.end = false;
    }
  
  }

}
