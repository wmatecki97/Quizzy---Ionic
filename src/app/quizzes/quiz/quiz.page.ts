import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quiz } from 'src/app/models/quizz.model';
import { QuizzesService } from '../quizzes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  quiz: Quiz;
  questionId: number;

  correctAnswers:number = 0;

  selectedAnswerIds: Set<number>= new Set<number>();

  constructor(
    private quizzesService: QuizzesService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
    ) {}

  ngOnInit() {
    this.quizzesService.getQuiz(this.activatedRoute.snapshot.params['quizId']).subscribe(q => this.quiz = q);
    this.questionId = 0;
    this.correctAnswers = 0;
  }


  selectAnswer(id: number){
    if(this.selectedAnswerIds.has(id)) {
      this.selectedAnswerIds.delete(id);
    } else {
      this.selectedAnswerIds.add(id);
    }
  }

  private checkCorrectAnswers(){
    let question = this.quiz.questions[this.questionId];

    question.answers.forEach(ans => {
      if (ans.correct) {
        if(this.selectedAnswerIds.has(ans.id)) {
          this.correctAnswers++;
          this.selectedAnswerIds.delete(ans.id);
        }
      }
    });
    this.correctAnswers-=this.selectedAnswerIds.size;
    this.selectedAnswerIds = new Set<number>();

  }

  nextQuestion(){
    this.checkCorrectAnswers();

    this.questionId++;
  }

  finishQuiz(){
    this.checkCorrectAnswers();

    let allCorrectAnswers = 0;
    this.quiz.questions.forEach(question => {
      question.answers.forEach(ans => {
        if(ans.correct){
          allCorrectAnswers++;
        }
      });
    });

    this.alertController.create({
      header: 'Congratulations',
      subHeader: 'Your score is:',
      message: this.correctAnswers + '/' + allCorrectAnswers,
      buttons: [
        {
          text: 'OK',
          handler: ()=> {
            this.router.navigate(['/quizzes']);
            this.ngOnInit();
          }
        }
      ]
    }).then(alert => alert.present());
  }
}
