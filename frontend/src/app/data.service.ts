import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  print = () => {
    console.warn("I got called from Service.");
  }

  getQuiz(){
    return this.http.get<any>('http://localhost:3000');
  }

}
