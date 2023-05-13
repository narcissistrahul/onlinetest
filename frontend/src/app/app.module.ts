import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { StageComponent } from './stage/stage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
