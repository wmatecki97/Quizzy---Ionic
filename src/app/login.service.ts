import { User } from './models/user.model';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedInSource = new BehaviorSubject<User>(undefined);
  isLoggedIn = this.isLoggedInSource.asObservable();

  constructor(private firestore: AngularFirestore) {

  }

  login(user: User){

      return this.firestore.collection('users').doc(user.login).snapshotChanges().pipe(map(action => {
        if(action.payload.exists)
        {
          console.log(action.payload.data());
          if(user.password == (action.payload.data() as User).password){
            this.isLoggedInSource.next(user);
            return true;
          }
        }
      }));
  }

  register(user:User){
    return this.firestore.collection('users').doc(user.login).snapshotChanges().pipe(map(action => {
      if(action.payload.exists)
      {
        console.log('user exists');
        return false;
      }
      else
      {
        this.firestore.collection('users').doc(user.login).set(user);
        console.log('added');
        return true;
      }
    }));
  }

  logout(){
    this.isLoggedInSource.next(undefined);
  }
}
