import { Injectable } from '@angular/core';
import {Task } from "../model/task"
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];
  constructor() { }
  saveTask(task: string) {
    this.tasks.push(new Task(task));
  }

  getTasks() {
    const tasks = of(this.tasks);
    return tasks;
  }
}
