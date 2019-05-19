import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesPage } from './quizzes.page';

describe('QuizzesPage', () => {
  let component: QuizzesPage;
  let fixture: ComponentFixture<QuizzesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
