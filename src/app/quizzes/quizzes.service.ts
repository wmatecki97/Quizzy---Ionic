import { Injectable } from '@angular/core';
import { Quiz } from '../models/quizz.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  quizzes :Quiz[] = [];

  constructor(private firestore: AngularFirestore) { 
   
  }

  getQuizzes(): Observable<Quiz[]>{
    const id = this.firestore.createId();
    return this.firestore.collection('quizzes').valueChanges() as Observable<Quiz[]>;
  }

  getQuiz(id: string): Observable<Quiz>{
    return this.firestore.collection('quizzes').doc(id).valueChanges() as Observable<Quiz>;
  }
}
