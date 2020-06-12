import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Task } from './model/task';
import { Observable } from 'rxjs';
import * as TaskManagerActions from './actions/task-manager.actions';
import { Store } from '@ngrx/store';
import { selectTodoList, selectInProgressList, selectDoneList } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'task-manager-ui';

  TODO = 'TODO';
  IN_PROGRESS = 'IN_PROGRESS';
  DONE = 'DONE';

  todoTasks$: Observable<Array<Task>>;
  inProgressTasks$: Observable<Array<Task>>;
  doneTasks$: Observable<Array<Task>>;

  constructor(private store: Store) {

    this.todoTasks$ = this.store.select(selectTodoList);
    this.inProgressTasks$ = this.store.select(selectInProgressList);
    this.doneTasks$ = this.store.select(selectDoneList);
    this.getLists();

  }

  onTaskStatusChanged(task: Task) {
    this.store.dispatch(TaskManagerActions.updateTask({ id: task.id, task: task }));
    this.getLists();
  }

  private getLists() {
    this.store.dispatch(TaskManagerActions.getTodoTasks());
    this.store.dispatch(TaskManagerActions.getInProgressTasks());
    this.store.dispatch(TaskManagerActions.getDoneTasks());
  }

}
