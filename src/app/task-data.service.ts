import { Injectable, Testability } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskDataService {

  taskData;

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchTask() {
    this.httpClient
      .get("http://www.mocky.io/v2/5b7e59b83000004e0084c0f6")
      .subscribe({
        next: (data) => {
          this.taskData = data
        },
        error: (err) => { console.dir("err: ", err) },
        complete: () => { console.log("Complete!!!!") }
      });
  }

  changeStatus(index) {
    let isComplete = this.taskData[index].isComplete;
    console.log('isComplete : ',isComplete);
    this.taskData[index].isComplete = !isComplete;
  }

}
