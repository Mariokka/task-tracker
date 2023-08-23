import { Component } from '@angular/core';
import {TaskService} from "./task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = [];
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
