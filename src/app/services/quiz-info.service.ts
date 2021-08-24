import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { QuestionsAndAnswers } from '../models/question-and-answers';

@Injectable({
  providedIn: 'root'
})
export class QuizInfoService {

  questionsAndAnswers: QuestionsAndAnswers[];

  constructor(
    private _http: HttpClient
  ) { }

  getJson(): Observable<any> {
    return this._http.get('../../assets/q-and-a-data.json');
  }
}