import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { QuestionsService } from '../../services/questions.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-question',
  templateUrl: './add-edit-question.component.html',
  styleUrls: ['./add-edit-question.component.scss'],
})
export class AddEditQuestionComponent {
  // questionData:Iquestion[]=[];
  questionData: any;
  isView: boolean = false;
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddEditQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _QuestionService: QuestionsService,
    private _Toastr: ToastrService
  ) {
    console.log(data);
    if (data) {
      this.getQuestionbyId(data.id);
      if (this.data.view) {
        console.log('view');
        this.isView = true;
        this.questionForm.disable();
      }
    }
  }

  questionForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    options: new FormGroup({
      A: new FormControl(null, [Validators.required]),
      B: new FormControl(null, [Validators.required]),
      C: new FormControl(null, [Validators.required]),
      D: new FormControl(null, [Validators.required]),
    }),
    answer: new FormControl(null, [Validators.required]),
    difficulty: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
  });

  onSubmit(form: FormGroup) {
    if (this.data) {
      this.updateQuestion(this.data.id, form.value.answer);
    } else {
      this._QuestionService.addQuestion(form.value).subscribe({
        next: (res) => {
          console.log(res);
          this._Toastr.success(res.message);
        },
        error: (err) => {},
        complete: () => {
          this.onClose();
        },
      });
    }
  }

  getQuestionbyId(id: string) {
    this._QuestionService.getQuestionById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.questionData = res;
      },
      error: (err) => {},
      complete: () => {
        this.questionForm.patchValue({
          title: this.questionData.title,
          description: this.questionData.description,
          answer: this.questionData.answer,
          type: this.questionData.type,
          difficulty: this.questionData.difficulty,
          options: {
            A: this.questionData.options.A,
            B: this.questionData.options.B,
            C: this.questionData.options.C,
            D: this.questionData.options.D,
          },
        });
      },
    });
  }

  updateQuestion(id: string, answer: string) {
    this._QuestionService.updateQuestion(id, answer).subscribe({
      next: (res) => {
        console.log(res);
        this._Toastr.success('question updated succesfully');
      },
      error: (err) => {},
      complete: () => {
        this.onClose();
      },
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
