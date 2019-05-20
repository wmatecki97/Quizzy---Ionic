import { QuizzesService } from './../quizzes.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quizz.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.page.html',
  styleUrls: ['./edit-quiz.page.scss'],
})
export class EditQuizPage implements OnInit {

  quiz: Quiz;
  selectedQuestion: number = 0;

  constructor(private quizzesService: QuizzesService, private activatedRoute: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
    // this.quizzesService.getQuiz(this.activatedRoute.snapshot.params['quizId']).subscribe(q => this.quiz = q);
    this.quiz = {questions:[]} as Quiz;
    this.addQuestion();
  }

  addQuestion(){
    this.quiz.questions.push({answers:[{}]} as Question);
    this.selectedQuestion = this.quiz.questions.length-1;
  }

  saveQuiz(){
    this.quiz.questions = this.quiz.questions.filter(q => q.question != '');
    this.quizzesService.saveQuiz(this.quiz).then(
      resolve => 
      this.router.navigateByUrl('/quizzes')
    );
  }
}
