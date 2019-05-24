import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quizz.model';
import { QuizzesService } from '../quizzes.service';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.page.html',
  styleUrls: ['./quizzes.page.scss'],
})
export class QuizzesPage implements OnInit {

  quizzes: Observable<Quiz[]>;
  user: User;

  constructor(private quizzesService: QuizzesService, private loginservice: LoginService) { }

  ngOnInit() {
    this.quizzes = this.quizzesService.getQuizzes();
    console.log(this.quizzes);
    this.loginservice.isLoggedIn.subscribe(user => this.user = user);
  }

}
