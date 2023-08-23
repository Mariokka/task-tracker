import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: string[] = [];
  constructor() { }
  saveTask(task: string) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}
