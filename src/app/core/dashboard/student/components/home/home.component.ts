import { Component } from '@angular/core';
import { QuizeStudentService } from '../../modules/quizes/services/quize-student.service';
import { IQuizStudent } from '../../modules/quizes/models/iquiz-student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  quizzes: IQuizStudent[] = [];
  constructor(
    private _QuizService: QuizeStudentService,
   
  ) {}
  ngOnInit(): void {
    this.getIncoming5Quizzes();
  }
  getIncoming5Quizzes() {
    this._QuizService.getFirst5IncomingQuizzes().subscribe({
      next: (res) => {
        console.log(res);
        this.quizzes = res;
      },
    });
  }
}
