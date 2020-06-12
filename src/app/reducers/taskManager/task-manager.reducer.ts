import { Action, createReducer, on } from '@ngrx/store';
import * as TaskManagerActions from '../../actions/task-manager.actions';
import { Task } from '../../model/task';

export interface TaskManagerState {
    todoTasks: Array<Task>;
    inProgressTasks: Array<Task>;
    doneTasks: Array<Task>;
    loadingTasks: boolean
};

export const initialState: TaskManagerState = {
    todoTasks: [],
    inProgressTasks: [],
    doneTasks: [],
    loadingTasks: false
};

const taskManagerReducer = createReducer(
    initialState,
    on(TaskManagerActions.createTask, state => ({ ...state, loadingTasks: true })),
    on(TaskManagerActions.createTaskSuccess, state => ({ ...state, loadingTasks: false })),
    on(TaskManagerActions.createTaskFailure, state => ({ ...state, loadingTasks: false })),

    on(TaskManagerActions.getTodoTasks, state => ({ ...state, loadingTasks: true })),
    on(TaskManagerActions.getTodoTasksSuccess, (state, { taskList }) => ({ ...state, loadingTasks: false, todoTasks: taskList })),
    on(TaskManagerActions.getTodoTasksFailure, state => ({ ...state, loadingTasks: false })),

    on(TaskManagerActions.getInProgressTasks, state => ({ ...state, loadingTasks: true })),
    on(TaskManagerActions.getInProgressTasksSuccess, (state, { taskList }) => ({ ...state, loadingTasks: false, inProgressTasks: taskList })),
    on(TaskManagerActions.getInProgressTasksFailure, state => ({ ...state, loadingTasks: false })),

    on(TaskManagerActions.getDoneTasks, state => ({ ...state, loadingTasks: true })),
    on(TaskManagerActions.getDoneTasksSuccess, (state, { taskList }) => ({ ...state, loadingTasks: false, doneTasks: taskList })),
    on(TaskManagerActions.getDoneTasksFailure, state => ({ ...state, loadingTasks: false })),

    on(TaskManagerActions.updateTask, (state, { id }) => ({ ...state, loadingTasks: true })),
    on(TaskManagerActions.updateTaskSuccess, state => ({ ...state, loadingTasks: false })),
    on(TaskManagerActions.updateTaskFailure, state => ({ ...state, loadingTasks: false })),

    on(TaskManagerActions.deleteTask, (state, { id }) => ({ ...state, loadingTasks: true })),
    on(TaskManagerActions.deleteTaskSuccess, state => ({ ...state, loadingTasks: false })),
    on(TaskManagerActions.deleteTaskFailure, state => ({ ...state, loadingTasks: false }))

)

export function reducer(state: TaskManagerState, action: Action) {
    return taskManagerReducer(state, action);
}
