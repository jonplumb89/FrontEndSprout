import { Component, OnInit } from '@angular/core';
import { QuizInfoService } from '../services/quiz-info.service';
import { QuestionsAndAnswers } from '../models/question-and-answers';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
 
  _questionsAndAnswers: QuestionsAndAnswers[];
  _displayTitle: boolean;
  _questionAndAnswer: QuestionsAndAnswers;
  _numberCorrect: number;
  _answers: string[];
  quizComplete: boolean;
  previousAnswerStatus: string;
  numOfQuestionsAsked: number;

  constructor(
    private _quizInfoService: QuizInfoService,
  ) { }

  ngOnInit() {
    this.initalize();
  }
  
  initalize() {
    this.quizComplete = false;
    this._displayTitle = true;
    this._quizInfoService.getJson().subscribe(this.onSuccess.bind(this), this.onError.bind(this));
    this.makeTree();
  }

  generateOrderForAnswers() {
    let answers = this._questionAndAnswer.others;
    answers.push(this._questionAndAnswer.answer);
    const length = answers.length;
    const randomOrder = [];
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * Math.floor(answers.length));
      randomOrder.push(answers[index]);
      answers = answers.filter(a => a !== answers[index]);
    }
    return randomOrder;
  }

  onSuccess(items: QuestionsAndAnswers[]) {
    const final = items.map((res: any) => {
    
      return { id: res.id, question: res.question, answer: res.answer, others: res.others, answered: false, correct: false, image: 'img/html.png' };
    });
    this._questionsAndAnswers = final;
  }

  onError(error: any) {
    console.log(error);
  }

  getQuestion(): QuestionsAndAnswers {
    const nonUsed: QuestionsAndAnswers[] = this._questionsAndAnswers.filter(qanda => !qanda.answered);
    const randomIndex = Math.floor(Math.random() * Math.floor(nonUsed.length));
    const question = nonUsed[randomIndex];
    return question;
  }

  getCorrectAmount() {
    const correctQuestions = this._questionsAndAnswers.filter((item: QuestionsAndAnswers) => item.correct);
    this._numberCorrect = correctQuestions.length;
  }

  makeTree() {
    (function () {
      const width = 400;
      const height = 420;
      const degrees_to_radians = Math.PI/180;
      const angle_mod = 20;
    
      class Branch {
          start_x: number;
          start_y: number;
          angle: number;
          length: number;
          cur_length: number;
          split: boolean;
          constructor(start_x: number, start_y: number, angle: number, length: number) {
              this.start_x = start_x;
              this.start_y = start_y;
              this.angle = angle;
              this.length = length;
    
              this.split = false;
              this.cur_length = 0;
          }
    
          get_end_x() {
              return this.start_x + this.cur_length * Math.cos(this.angle * degrees_to_radians);
          }
    
          get_end_y() {
              return this.start_y + this.cur_length * Math.sin(this.angle * degrees_to_radians);
          }
      }
    
      function get_random_length(start_length) {
          return start_length - (4 + (Math.random() * 15));
      }
    
      function get_random_angle(start_angle, direction) {
          return start_angle + direction * (angle_mod + (Math.random() * 10));
      }
    
      function main() {
          const canvas = <HTMLCanvasElement> document.getElementById("canvas");
          const context = <CanvasRenderingContext2D> canvas.getContext("2d");
          var branches: Branch[] = [],
              zero_reached = false;
    
          canvas.width = width;
          canvas.height = height;
    
          branches.push(new Branch(
              width / 2,
              height,
              -90,
              80
          ));
    
          let update = function() {
              if(zero_reached === false) {
                  let new_branches: Branch[] = [];
                  let nothing_updated = true;
    
                  branches.forEach((branch) => {
                      if(branch.split === false && branch.cur_length >= branch.length) {
                          nothing_updated = false;
                          branch.split = true;
                          
    
                          var branch_one = new Branch(
                              branch.get_end_x(),
                              branch.get_end_y(),
                              get_random_angle(branch.angle, 1.0),
                              get_random_length(branch.length)
                          );
    
                          var branch_two = new Branch(
                              branch.get_end_x(),
                              branch.get_end_y(),
                              get_random_angle(branch.angle, -1.0),
                              get_random_length(branch.length)
                          );
    
                          if(branch_one.length > 0) {
                              new_branches.push(branch_one);
                          }
                          if(branch_two.length > 0) {
                              new_branches.push(branch_two);
                          }
                      } else if(branch.cur_length < branch.length) {
                          nothing_updated = false;
                          branch.cur_length += 4;
                      }
                  });
                  zero_reached = nothing_updated;
                  if(new_branches.length > 0) {
                      branches = branches.concat(new_branches);
                  }
              }
          };
    
          let render = function() {
              branches.forEach((branch) => {
                  context.beginPath();
                  context.moveTo(
                      branch.start_x,
                      branch.start_y
                  );
                  context.lineTo(
                      branch.start_x + (branch.cur_length * Math.cos(branch.angle * degrees_to_radians)),
                      branch.start_y + (branch.cur_length * Math.sin(branch.angle * degrees_to_radians))
                  );
                  context.stroke();
              });
          };
    
          let game_loop = function() {
              update();
              render();
              requestAnimationFrame(game_loop);
          };
    
          requestAnimationFrame(game_loop);
      }
        window.onload = main;
    
  })();
  }

  startQuiz() {
    this._numberCorrect = 0;
    this.numOfQuestionsAsked = 0;
    this._displayTitle = false;
    this._questionAndAnswer = this.getQuestion();
    this._answers = this.generateOrderForAnswers();
  }

  submitAnswer(answer: string) {
    const index = this._questionsAndAnswers.indexOf(this._questionAndAnswer);
    this.numOfQuestionsAsked += 1;
    if (this._questionAndAnswer.answer === answer) {
      this._questionsAndAnswers[index].correct = true;
      this._questionsAndAnswers[index].answered = true;
      this._numberCorrect += 1
      console.log(this._numberCorrect);
      this.previousAnswerStatus = "Correct!";
    } else {
      this._questionsAndAnswers[index].correct = false;
      this._questionsAndAnswers[index].answered = true;
      this.previousAnswerStatus = "Incorrect";
    }
    console.log(this._questionsAndAnswers);
    this.getCorrectAmount();
    this._questionAndAnswer = this.getQuestion();
    if (this._questionAndAnswer === undefined) {
      // this.initalize();
      this.quizComplete = true;
      return;
    }
    this._answers = this.generateOrderForAnswers();
  }
}




