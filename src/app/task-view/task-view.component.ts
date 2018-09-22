import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  
  @Input() task;
  @Input() index;
  @Output() check = new EventEmitter();
  
  constructor(
    private taskDataService: TaskDataService
  ) { }

  ngOnInit() {
  }

  onComplete(index) {
    this.taskDataService.changeStatus(index)
  }

  onChange() {
    this.check.emit();
  }

}
