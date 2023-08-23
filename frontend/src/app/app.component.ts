import { Component } from '@angular/core';
import {TaskService} from "./service/task.service";
import {Task } from "./model/task"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  task: string | undefined;
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  createTask() {
    if (this.task != null) {
      this.taskService.saveTask(this.task);
    }
  }
}
