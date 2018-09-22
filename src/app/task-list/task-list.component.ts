import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public taskDataService: TaskDataService) {
    // console.log('TaskListComponent: constructor')
  }

  onCheck(index) {
    this.taskDataService.changeStatus(index);
  }

  ngOnChanges() {
    // console.log('TaskListComponent: ngOnChanges')
  }

  ngOnInit() {
    // console.log('TaskListComponent: ngOnInit')
  }

  ngDoCheck() {
    // console.log('TaskListComponent: ngDoCheck')
  }

  ngAfterContentInit() {
    // console.log('TaskListComponent: ngAfterContentInit')
  }

  ngAfterContentChecked() {
    // console.log('TaskListComponent: ngAfterContentChecked')
  }

  ngAfterViewInit() {
    // console.log('TaskListComponent: ngAfterViewInit')
  }

  ngAfterViewChecked() {
    // console.log('TaskListComponent: ngAfterViewChecked')
  }

  ngOnDestroy() {
    // console.log('TaskListComponent: ngOnDestroy')
  }


}
