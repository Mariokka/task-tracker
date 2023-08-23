export class Task {
  static counter: number = 1;
  title: string | undefined;
  // description: string | undefined;
  description: string = 'No rush';
  id: number | undefined;
  // dueDate: string | undefined;
  dueDate: string = "2023-09-01";

  constructor(title: string) {
    this.title = title;
    this.id = Task.counter;
    Task.counter++;
  }
}
