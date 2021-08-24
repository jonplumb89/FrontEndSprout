export class QuestionsAndAnswers {
    constructor(
      public id: string,
      public question: string,
      public answer: string,
      public others: string[],
      public answered: boolean,
      public correct: boolean,
      public image: string,
      ) {}
  }