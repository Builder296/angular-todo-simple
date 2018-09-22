import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDataService } from './task-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskViewComponent } from './task-view/task-view.component';
import { TitlePipe } from './title.pipe';
import { RainbowDirective } from './rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskViewComponent,
    TitlePipe,
    RainbowDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: TaskListComponent },
      { path: "add", component: AddTaskComponent },
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TaskDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
