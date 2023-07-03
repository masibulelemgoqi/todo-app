import { Component, OnInit } from '@angular/core';
import { Task } from '@types';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((t) => this.tasks.push(t));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id != task.id))
      );
  }

  updateReminder(task: Task) {
    this.taskService.updateReminder(task).subscribe(
      (newTask) =>
        (this.tasks = this.tasks.map((t) => {
          if (task.id == t.id) {
            t = newTask;
          }
          return t;
        }))
    );
  }
}
