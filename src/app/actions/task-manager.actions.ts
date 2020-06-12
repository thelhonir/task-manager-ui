import { createAction, props } from '@ngrx/store';
import { Task } from '../model/task';

export const getTodoTasksType = '[TODO Tasks] Get TODO tasks';
export const getTodoTasksSuccessType = '[TODO Tasks] Get TODO tasks successfully';
export const getTodoTasksFailureType = '[TODO Tasks] Error while getting TODO tasks';

export const getTodoTasks = createAction(getTodoTasksType);
export const getTodoTasksSuccess = createAction(getTodoTasksSuccessType, props<{ taskList: Array<Task> }>());
export const getTodoTasksFailure = createAction(getTodoTasksFailureType);

export const getInProgressTasksType = '[IN_PROGRESS Tasks] Get IN_PROGRESS tasks';
export const getInProgressTasksSuccessType = '[IN_PROGRESS Tasks] Get IN_PROGRESS tasks successfully';
export const getInProgressTasksFailureType = '[IN_PROGRESS Tasks] Error while getting IN_PROGRESS tasks';

export const getInProgressTasks = createAction(getInProgressTasksType);
export const getInProgressTasksSuccess = createAction(getInProgressTasksSuccessType, props<{ taskList: Array<Task> }>());
export const getInProgressTasksFailure = createAction(getInProgressTasksFailureType);

export const getDoneTasksType = '[DONE Tasks] Get DONE tasks';
export const getDoneTasksSuccessType = '[DONE Tasks] Get DONE tasks successfully';
export const getDoneTasksFailureType = '[DONE Tasks] Error while getting DONE tasks';

export const getDoneTasks = createAction(getDoneTasksType);
export const getDoneTasksSuccess = createAction(getDoneTasksSuccessType, props<{ taskList: Array<Task> }>());
export const getDoneTasksFailure = createAction(getDoneTasksFailureType);

export const createTaskType = '[CREATE task] create Task';
export const createTaskSuccessType = '[CREATE task] create Task successfully';
export const createTaskFailureType = '[CREATE task] Error while creating a task';

export const createTask = createAction(createTaskType, props<{ task: Task }>());
export const createTaskSuccess = createAction(createTaskSuccessType);
export const createTaskFailure = createAction(createTaskFailureType);

export const updateTaskType = '[UPDATE task] Update Task';
export const updateTaskSuccessType = '[UPDATE task] Update Task successfully';
export const updateTaskFailureType = '[UPDATE task] Error while updating a task';

export const updateTask = createAction(updateTaskType, props<{ id: string, task: Task }>());
export const updateTaskSuccess = createAction(updateTaskSuccessType);
export const updateTaskFailure = createAction(updateTaskFailureType);

export const deleteTaskType = '[DELETE task] delete Task';
export const deleteTaskSuccessType = '[DELETE task] delete Task successfully';
export const deleteTaskFailureType = '[DELETE task] Error while deleting a task';

export const deleteTask = createAction(deleteTaskType, props<{ id: string, task: Task }>());
export const deleteTaskSuccess = createAction(deleteTaskSuccessType);
export const deleteTaskFailure = createAction(deleteTaskFailureType)
