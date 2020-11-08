import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() getTask: Array<any>;
  @Output() number: EventEmitter<number> = new EventEmitter<number>();

  editIndex: number;
  newTask: string;
  isOn = false;


  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(index: number): void {
    this.getTask.splice(index, 1);
  };

  edit(index: number): void {
    this.isOn = !this.isOn;
    this.editIndex = index;
    this.newTask = this.getTask[index].taskA;
  };

  sendNumber(): void {
    this.number.emit(this.getTask.length - 1);
  }

  save(): void {
    this.isOn = !this.isOn;
    this.getTask[this.editIndex].taskA = this.newTask;
    this.editIndex = null;
  }

  onchange(i): void {
    if (this.getTask[i].isselected === true) {
      this.getTask[i].progress = 'Done'
      this.getTask[i].progressColor = 'green';
    } else {
      this.getTask[i].progress = 'In PROGRESS'
      this.getTask[i].progressColor = "red";
    }
  }

}
