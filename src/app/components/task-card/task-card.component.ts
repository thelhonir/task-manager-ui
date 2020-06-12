import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from 'src/app/model/task';
import { STATUS } from 'src/app/model/status';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent implements OnInit {

  @Input()
  task: Task;

  @Output()
  delete = new EventEmitter<string>();

  STATUS_NAME = STATUS;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  showNotImplementedMessage() {
    this._snackBar.open('Not implemented yet, only through API','Ok! :(', {
      duration: 2000,
    });
  }
}




