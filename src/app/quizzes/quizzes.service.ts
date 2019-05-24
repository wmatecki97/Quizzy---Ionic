import { Injectable } from '@angular/core';
import { Quiz } from '../models/quizz.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  quizzes :Quiz[] = [];

  constructor(private firestore: AngularFirestore) { 
   
  }

  getQuizzes(): Observable<Quiz[]>{
    return this.firestore.collection('quizzes').valueChanges() as Observable<Quiz[]>;
  }

  getQuiz(id: string): Observable<Quiz>{
    return this.firestore.collection('quizzes').doc(id).valueChanges() as Observable<Quiz>;
  }

  saveQuiz(quiz: Quiz){
    if(!quiz.id)
      quiz.id = this.firestore.createId();
    return this.firestore.doc('quizzes/'+quiz.id).set(quiz);
  }

  deleteQuiz(quiz: Quiz){
    if(quiz.id)
      this.firestore.doc('quizzes/' + quiz.id).delete();
  }
}
