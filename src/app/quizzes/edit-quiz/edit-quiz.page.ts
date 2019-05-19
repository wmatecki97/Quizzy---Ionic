import { QuizzesService } from './../quizzes.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quizz.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.page.html',
  styleUrls: ['./edit-quiz.page.scss'],
})
export class EditQuizPage implements OnInit {

  quiz: Quiz;

  constructor(private quizzesService: QuizzesService, private activatedRoute: ActivatedRoute) { 
    // this.quiz = quizzesService.getQuiz(this.activatedRoute.snapshot.params['quizId']);
  }

  ngOnInit() {

  }

}
