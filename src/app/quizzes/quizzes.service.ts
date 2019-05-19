import { Injectable } from '@angular/core';
import { Quiz } from '../models/quizz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  quizzes :Quiz[] = [];

  constructor() { 
    this.quizzes.push({
      id: 1,
      name: 'Rogacze',
      questions: [{
        question:'Ma rogi',
        answers:[{
          correct: false,
          id: 1,
          text: 'Kot'
        },
        {
          correct: false,
          id: 2,
          text: 'Pies'
        },
        {
          correct: false,
          id: 3,
          text: 'Mysz'
        },
        {
          correct: true,
          id: 4,
          text: 'Baran'
        }]
      },
      {
        question:'Więcej niż jedno zwierzę to:',
        answers:[{
          correct: false,
          id: 1,
          text: 'Kot'
        },
        {
          correct: false,
          id: 2,
          text: 'Pies'
        },
        {
          correct: true,
          id: 3,
          text: 'Owca'
        },
        {
          correct: true,
          id: 4,
          text: 'Lama'
        }]
      }
    ]
    });

    this.quizzes.push({
      id: 2,
      name: 'Ogoniaste',
      questions: [{
        question:'Ma ogon',
        answers:[{
          correct: true,
          id: 1,
          text: 'Kot'
        },
        {
          correct: true,
          id: 2,
          text: 'Pies'
        },
        {
          correct: true,
          id: 3,
          text: 'Mysz'
        },
        {
          correct: true,
          id: 4,
          text: 'Motyl'
        }]
      }
    ]
    });
  }

  getQuizzes(): Quiz[]{
    return this.quizzes;
  }

  getQuiz(id: number): Quiz{
    return this.quizzes.find(quiz => quiz.id == id);
  }
}
