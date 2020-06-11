import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'task-manager-ui';
  taskList: Array<Task> = [{
    id: 'b0aacc24-3e97-405a-90c5-84a7ec49d0d0',
    description: 'Create card component!',
    status: 'TODO'
  }, {
    id: '07525dad-04a0-47d3-8e32-5946f6819ae8',
    description: 'Create Column!',
    status: 'TODO'
  }, {
    id: 'b9c89016-9edb-4b13-bcc1-71c68d46ade1',
    description: 'Style card component!',
    status: 'TODO'
  }, {
    id: '17c454a8-d811-4340-a81a-4a33f27c6f18',
    description: 'Get more coffee',
    status: 'TODO'
  }, {
    id: '6b3a4fae-19eb-42f9-ab59-de3f51923100',
    description: 'Do a barrel roll',
    status: 'TODO'
  }]

  todoList: Array<Task> = [{
    id: 'ebe2be29-bb65-40e3-94d7-30da85fcdfc0',
    status: 'IN_PROGRESS'
  }, {
    id: 'b9cd7e96-ca02-406a-92fc-adbe6f6be806',
    description: 'Create Column!',
    status: 'IN_PROGRESS'
  }]

  doneList: Array<Task> = [{
    id: '94c95998-1e38-42f4-aee8-79e663137cfe',
    description: 'Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!',
    status: 'DONE'
  }, {
    id: 'ffaa08c1-8b1e-4d60-8940-7c5d30a18104',
    description: 'Create Column!',
    status: 'DONE'
  }]

  TODO = 'TODO';
  IN_PROGRESS = 'IN_PROGRESS';
  DONE = 'DONE';


}
