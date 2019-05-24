import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'quizzes', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'quizzes', loadChildren: './quizzes/quizzes/quizzes.module#QuizzesPageModule' },
  { path: 'quizzes/edit', loadChildren: './quizzes/edit-quiz/edit-quiz.module#EditQuizPageModule' },
  { path: 'quiz/:quizId', loadChildren: './quizzes/quiz/quiz.module#QuizPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
