import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonLoaderComponent } from './button-loader/button-loader.component';
import { TimerQuizIcoComponent } from './svg/timer-quiz-ico/timer-quiz-ico.component';
import { VaultIcoComponent } from './svg/vault-ico/vault-ico.component';
import { HomeIconComponent } from './svg/home-icon/home-icon.component';
import { QuizesIconComponent } from './svg/quizes-icon/quizes-icon.component';
import { ResultIconComponent } from './svg/result-icon/result-icon.component';
import { StudentsIconComponent } from './svg/students-icon/students-icon.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TrimDescptionPipe } from './pipes/trim-descption.pipe';

@NgModule({
  declarations: [
    ButtonLoaderComponent,
    TimerQuizIcoComponent,
    VaultIcoComponent,
    HomeIconComponent,
    QuizesIconComponent,
    ResultIconComponent,
    StudentsIconComponent,
    DeleteDialogComponent,
    TrimDescptionPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    MatPaginatorModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    ButtonLoaderComponent,
    TimerQuizIcoComponent,
    VaultIcoComponent,
    HomeIconComponent,
    QuizesIconComponent,
    ResultIconComponent,
    StudentsIconComponent,
    MatPaginatorModule,
    DeleteDialogComponent,
    TrimDescptionPipe
  ],
})
export class SharedModule {}
