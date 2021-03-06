import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditQuizPage } from './edit-quiz.page';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    path: '',
    component: EditQuizPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EditQuizPage, QuestionComponent]
})
export class EditQuizPageModule {}
