import {Component, Input} from '@angular/core';
import {Task } from "../model/task"

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input()
  task: Task | undefined;

  canEdit: boolean = false;
}
