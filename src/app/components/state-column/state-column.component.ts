import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Task } from '../task-card/task-card.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-state-column',
  templateUrl: './state-column.component.html',
  styleUrls: ['./state-column.component.sass']
})
export class StateColumnComponent implements OnInit {

  @Input()
  tasks: Array<Task>;

  @Input()
  taskStatus: string;

  statusName = {
      todo: "To Do",
      ip: "In Progress",
      done: "Done"
  }
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Array<Task>>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
