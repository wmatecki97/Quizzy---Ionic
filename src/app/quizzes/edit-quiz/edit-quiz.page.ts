import { LoginService } from './../../login.service';
import { AlertController } from '@ionic/angular';
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

  constructor(
    private quizzesService: QuizzesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private loginService: LoginService) {
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['quizId']) {
      this.quizzesService.getQuiz(this.activatedRoute.snapshot.params['quizId']).subscribe(q => this.quiz = q);
    }
    else {
      this.loginService.isLoggedIn.subscribe(user => {
        this.quiz = { questions: [], author: user } as Quiz;
        this.addQuestion();
      });
    }
  }

  addQuestion() {
    this.quiz.questions.push({ answers: [{}] } as Question);
    this.selectedQuestion = this.quiz.questions.length - 1;
  }

  saveQuiz() {
    this.quiz.questions = this.quiz.questions.filter(q => q.question != '');
    this.quizzesService.saveQuiz(this.quiz).then(
      resolve =>
        this.router.navigateByUrl('/quizzes')
    );
  }

  deleteQuiz(){
    this.alertController.create({
      header: 'Warning',
      message: 'Do you really want to delete this quiz?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          handler: ()=> {
            this.quizzesService.deleteQuiz(this.quiz);
            this.router.navigate(['/quizzes']);
          }
        }
      ]
    }).then(alert => alert.present());
  }
}
