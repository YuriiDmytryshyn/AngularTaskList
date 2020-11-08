import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTaskList';

  numberOfTanks: number = 0;
  task: string;
  is: boolean = false;
  progress = "In PROGRESS";
  progressColor = "red";
  tasks: Array<any> = [];

  sendTheTask(): void {
    if (this.task.length !== 0) {
      const task = {
        number: this.tasks.length + 1,
        taskA: this.task,
        isselected: this.is,
        progress: this.progress,
        progressColor: this.progressColor
      };
      this.numberOfTanks = task.number;
      this.tasks.push(task);
      this.task = '';
    }
  }

  getNumber(n: number): void {
    this.numberOfTanks = n;
  }
}
