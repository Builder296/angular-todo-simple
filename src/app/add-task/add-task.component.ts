import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addFormGroup: FormGroup;

  constructor(
    public taskDataService: TaskDataService,
    private rounter: Router
  ) {
    this.addFormGroup = new FormGroup({
      "title" : new FormControl("", Validators.required),
      "date" : new FormControl("", Validators.required),
      "description" : new FormControl(""),
      "isComplete" : new FormControl(false)
    })
    // this.dateControl = new FormControl("2018-08-15", Validators.required);
  }

  addTask() {
    this.taskDataService.taskData.push(this.addFormGroup.value)
    // this.taskDataService.taskData.push(this.dateControl.value)
    this.rounter.navigate(['']);
  }


  ngOnChanges() {
    // console.log('AddTaskComponent: ngOnChanges')
  }

  ngOnInit() {
    // console.log('AddTaskComponent: ngOnInit')
  }

  ngDoCheck() {
    // console.log('AddTaskComponent: ngDoCheck')
  }

  ngAfterContentInit() {
    // console.log('AddTaskComponent: ngAfterContentInit')
  }

  ngAfterContentChecked() {
    // console.log('AddTaskComponent: ngAfterContentChecked')
  }

  ngAfterViewInit() {
    // console.log('AddTaskComponent: ngAfterViewInit')
  }

  ngAfterViewChecked() {
    // console.log('AddTaskComponent: ngAfterViewChecked')
  }

  ngOnDestroy() {
    // console.log('AddTaskComponent: ngOnDestroy')
  }


}
