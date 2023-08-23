export class Task {
  title: string | undefined;
  description: string | undefined;
  id: number | undefined;
  dueDate: string | undefined;

  constructor(description: string) {
    this.description = description;
  }
}
