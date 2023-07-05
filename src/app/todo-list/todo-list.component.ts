import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// decorateur
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  tasks: Task[] = []; // variable (tableau)

  // Ajout d'une tache
  addTask(title: string): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: title,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);

    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  // Mise a jour de la tache (fini ou pas fini)
  updateTaskStatus(task: Task): void {
    task.completed = !task.completed;
  }
}
