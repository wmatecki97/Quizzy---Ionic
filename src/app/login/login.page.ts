import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;
  loggedIn: boolean;

  constructor(private loginService: LoginService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.loginService.isLoggedIn.subscribe(user => this.loggedIn = (user !== undefined));
    this.user = {} as User;
  }

  authenticate(){
    this.loginService.login(this.user).subscribe(success => {
      if(success){
        this.toastController.create({
          message: 'Logged in succesfully',
          duration: 2000
        }).then(toast => {
          toast.present();
          this.router.navigateByUrl('/quizzes');
        });
      }
      else{
        this.toastController.create({
          message: 'Invalid login or password',
          duration: 2000
        }).then(toast => {
          toast.present();
        });
      }
    });
  }

  register(){
    this.loginService.register(this.user).subscribe(success => {
      let message: string;
      if(success){
        message = 'Account created succesfully';
      }
      else{
        message = 'Given login is busy, try another one'
      }
      this.toastController.create({
        message: message,
        duration: 2000
      }).then(toast => {
        toast.present();
      });
    });
  }

  logout(){
    this.loginService.logout();
  }
}
