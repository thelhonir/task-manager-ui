import { ActionReducerMap, MetaReducer, createSelector, createFeatureSelector } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TaskManagerState } from './taskManager/task-manager.reducer';
import * as TaskManagerReducer from './taskManager/task-manager.reducer';

export interface State {
    taskManagerState: TaskManagerState
}

export const reducers: ActionReducerMap<State> = {
    taskManagerState: TaskManagerReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];



// export const selectTaskManagerState = (state: State) => state.taskManagerState;

export const selectTaskManagerState = createFeatureSelector<TaskManagerState>('taskManagerStore');

export const selectTodoList = createSelector(selectTaskManagerState, (taskManagerState) => taskManagerState.todoTasks);

export const selectInProgressList = createSelector(selectTaskManagerState, (taskManagerState) => taskManagerState.inProgressTasks);

export const selectDoneList = createSelector(selectTaskManagerState, (taskManagerState) => taskManagerState.doneTasks);

export const selectLoadingTasks = createSelector(selectTaskManagerState, (taskManagerState) => taskManagerState.loadingTasks);