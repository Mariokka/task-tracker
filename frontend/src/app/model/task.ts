export class Task {
  static counter: number = 0;
  title: string | undefined;
  description: string | undefined;
  id: number | undefined;
  dueDate: string | undefined;

  constructor(description: string) {
    this.description = description;
    this.id = Task.counter;
    Task.counter++;
  }
}
