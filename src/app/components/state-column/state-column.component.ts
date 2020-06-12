import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/model/task';
import { STATUS } from 'src/app/model/status';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-state-column',
  templateUrl: './state-column.component.html',
  styleUrls: ['./state-column.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateColumnComponent implements OnInit {

  @Input()
  tasks: Array<Task>;

  @Input()
  taskStatus: string;

  @Output()
  taskStatusChanged = new EventEmitter<Task>();

  STATUS_NAME = STATUS;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer !== event.container) {
      let task = event.previousContainer.data[event.previousIndex];
      this.taskStatusChanged.emit({ ...task, status: event.container.id });
      this._snackBar.open('Task ' + task.id.substr(0, 8) + ' moved to ' + this.STATUS_NAME[event.container.id], 'Dismiss', {
        duration: 2000
      });
    }
  }
}
