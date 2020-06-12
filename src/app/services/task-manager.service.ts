import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';

@Injectable()
export class TaskManagerService {
    constructor(private http: HttpClient) {

    }

    getTodoTasks() {
        return this.http.get<Array<Task>>("http://localhost:8080/tasks/TODO");
    }

    getInProgressTasks() {
        return this.http.get<Array<Task>>("http://localhost:8080/tasks/IN_PROGRESS");
    }

    getDoneTasks() {
        return this.http.get<Array<Task>>("http://localhost:8080/tasks/DONE");
    }

    updateTask(id: string, task: Task){
        return this.http.put<Task>("http://localhost:8080/task/" + id, task);
    }
}