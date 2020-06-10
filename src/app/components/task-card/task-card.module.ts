import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TaskCardComponent } from './task-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [TaskCardComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    DragDropModule,
    CommonModule
  ],
  exports: [TaskCardComponent]
})
export class TaskCardModule { }
