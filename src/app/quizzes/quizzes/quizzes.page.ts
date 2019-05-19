import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quizz.model';
import { QuizzesService } from '../quizzes.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.page.html',
  styleUrls: ['./quizzes.page.scss'],
})
export class QuizzesPage implements OnInit {

  quizzes: Quiz[];

  constructor(private quizzesService: QuizzesService) { }

  ngOnInit() {
    this.quizzes = this.quizzesService.getQuizzes();
    console.log(this.quizzes);
  }

}
