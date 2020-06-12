import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as TaskManagerActions from '../actions/task-manager.actions';
import { TaskManagerService } from '../services/task-manager.service';

@Injectable()
export class TaskManagerEffects {

    getTodoTasks$ = createEffect(() => this.actions$.pipe(
        ofType(TaskManagerActions.getTodoTasks),
        mergeMap(() => this.taskManagerService.getTodoTasks().pipe(
            map((tasks) => TaskManagerActions.getTodoTasksSuccess({ taskList: tasks })),
            catchError(() => TaskManagerActions.getTodoTasksFailure)
        ))));

    getInProgressTasks$ = createEffect(() => this.actions$.pipe(
        ofType(TaskManagerActions.getInProgressTasks),
        mergeMap(() => this.taskManagerService.getInProgressTasks().pipe(
            map((tasks) => TaskManagerActions.getInProgressTasksSuccess({ taskList: tasks })),
            catchError(() => TaskManagerActions.getInProgressTasksFailure)
        ))));

    getDoneTasks$ = createEffect(() => this.actions$.pipe(
        ofType(TaskManagerActions.getDoneTasks),
        mergeMap(() => this.taskManagerService.getDoneTasks().pipe(
            map((tasks) => TaskManagerActions.getDoneTasksSuccess({ taskList: tasks })),
            catchError(() => TaskManagerActions.getDoneTasksFailure)
        ))));

    updateTask$ = createEffect(() => this.actions$.pipe(
        ofType(TaskManagerActions.updateTask),
        mergeMap((action) => this.taskManagerService.updateTask(action.id, action.task).pipe(
            map(() => TaskManagerActions.updateTaskSuccess()),
            catchError(() => TaskManagerActions.updateTaskFailure)
        ))));

    constructor(private actions$: Actions, private taskManagerService: TaskManagerService) { }
}