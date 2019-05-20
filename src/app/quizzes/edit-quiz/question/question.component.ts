import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { Answer } from 'src/app/models/answer.model';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  addListItem(){
    this.question.answers.push({id: this.question.answers.length} as Answer);
  }
}
