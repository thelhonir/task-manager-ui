import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.sass']
})
export class TaskCardComponent implements OnInit {

  @Input()
  task: Task;

  STATUS_NAME = STATUS_NAME;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  showNotImplementedMessage() {
    this._snackBar.open('Not implemented yet, only through API','Ok! :(', {
      duration: 2000,
    });
  }
}

export const STATUS_NAME = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done"
}


export interface Task {
  id: number,
  description: string,
  status: string
}