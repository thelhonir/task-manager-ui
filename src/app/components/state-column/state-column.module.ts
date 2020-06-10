import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TaskCardModule } from '../task-card/task-card.module';
import { StateColumnComponent } from './state-column.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    StateColumnComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatGridListModule,
    TaskCardModule
  ],
  exports: [
    StateColumnComponent]
})
export class StateColumnModule { }
