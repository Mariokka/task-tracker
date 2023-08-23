export class Task {
  static counter: number = 0;
  title: string | undefined;
  description: string | undefined;
  id: number | undefined;
  dueDate: string | undefined;

  constructor(title: string) {
    this.title = title;
    this.id = Task.counter;
    Task.counter++;
  }
}
