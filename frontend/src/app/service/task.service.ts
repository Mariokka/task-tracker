import { Injectable } from '@angular/core';
import {Task } from "../model/task"

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
    return this.tasks;
  }
}
