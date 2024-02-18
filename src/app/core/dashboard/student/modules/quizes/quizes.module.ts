import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizesComponent } from './components/quizes/quizes.component';
import { SharedModule } from '../../../../../shared/shared.module';

import { QuizCodeComponent } from './components/quiz-code/quiz-code.component';
import { ExamComponent } from './components/exam/exam.component';
import { JoinQuizComponent } from './components/join-quiz/join-quiz.component';

@NgModule({
  declarations: [QuizesComponent, QuizCodeComponent, ExamComponent,JoinQuizComponent],
  imports: [CommonModule, QuizesRoutingModule, SharedModule],
})
export class QuizesModule {}
