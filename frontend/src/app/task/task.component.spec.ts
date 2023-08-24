import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import {Task} from "../model/task";

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent]
    });
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const givenTask = (task: string) => {
    component.task = new Task(task);
    fixture.detectChanges();
  };

  const givenCantEdit = () => {
    component.canEdit = false;
    fixture.detectChanges();
  }

  const expectTitleToBeDisplayed = (title: string) => {
    const titleText = fixture.nativeElement.querySelector('.title').textContent;
    expect(titleText).toContain(title);
  }

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('displays title', () => {
    givenTask("feed the dog");
    givenCantEdit();

    expectTitleToBeDisplayed("feed the dog")
  });
});
