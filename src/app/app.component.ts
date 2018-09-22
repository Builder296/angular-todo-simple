import { Component, OnInit } from '@angular/core';
import { TaskDataService } from './task-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';
     
  constructor(private taskDataService: TaskDataService) {
    // console.log('AppComponent: constructor')
  }

  ngOnChanges() {
    // console.log('AppComponent: ngOnChanges')
  }

  ngOnInit() {
    // console.log('AppComponent: ngOnInit')
    this.taskDataService.fetchTask();
  }

  ngDoCheck() {
    // console.log('AppComponent: ngDoCheck')
  }

  ngAfterContentInit() {
    // console.log('AppComponent: ngAfterContentInit')
  }

  ngAfterContentChecked() {
    // console.log('AppComponent: ngAfterContentChecked')
  }

  ngAfterViewInit() {
    // console.log('AppComponent: ngAfterViewInit')
  }

  ngAfterViewChecked() {
    // console.log('AppComponent: ngAfterViewChecked')
  }

  ngOnDestroy() {
    // console.log('AppComponent: ngOnDestroy')
  }


}
