import { Subscription } from 'rxjs';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Task } from '@types';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit, OnDestroy {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddTask: boolean;
  subscription: Subscription;
  task: Task = {
    day: '',
    reminder: false,
    text: '',
  };

  constructor(private uiService: UiService) {}

  onSubmit() {
    if (this.task.text.length < 1) {
      alert('Please add a task!!');
      return;
    }
    this.onAddTask.emit(this.task);
    this.clearForm();
  }

  clearForm() {
    this.task.day = '';
    this.task.reminder = false;
    this.task.text = '';
  }

  ngOnInit(): void {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
