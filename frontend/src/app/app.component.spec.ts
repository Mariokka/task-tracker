import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {AppModule} from "./app.module";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [AppModule, RouterTestingModule],
    declarations: [AppComponent]
  })
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const clickSaveButton = () => {
    const button = fixture.nativeElement.querySelector('#create-button');
    button.click();
    fixture.detectChanges();
  };

  const givenTask = (task: string) => {
    component.task = task;
  };

  const expectPageToContainThisNumberOfTasks = (numberOfTasks: number) => {
    const tasks = fixture.nativeElement.querySelector('app-task');
    expect(tasks).toHaveSize(numberOfTasks);
  }

  it('creates the app', () => {
    expect(component).toBeTruthy();
  });

  it(`creates a task after clicking on create button`, () => {
    givenTask("feed the dog");

    clickSaveButton();

    expectPageToContainThisNumberOfTasks(1);
  });
});
