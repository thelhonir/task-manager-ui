import { Component } from '@angular/core';
import { Task } from './components/task-card/task-card.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  taskList: Array<Task> = [{
    id: 20,
    description: 'Create card component!',
    status: 'TODO'
  }, {
    id: 30,
    description: 'Create Column!',
    status: 'TODO'
  }, {
    id: 40,
    description: 'Style card component!',
    status: 'TODO'
  }, {
    id: 50,
    description: 'Get more coffee',
    status: 'TODO'
  }, {
    id: 60,
    description: 'Do a barrel roll',
    status: 'TODO'
  }]

  todoList: Array<Task> = [{
    id: 70,
    description: 'Create card component!',
    status: 'IN_PROGRESS'
  }, {
    id: 80,
    description: 'Create Column!',
    status: 'IN_PROGRESS'
  }]

  doneList: Array<Task> = [{
    id: 90,
    description: 'Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!Create card component!',
    status: 'IN_PROGRESS'
  }, {
    id: 100,
    description: 'Create Column!',
    status: 'IN_PROGRESS'
  }]

  todo = 'todo';
  ip = 'ip';
  done = 'done';


}
