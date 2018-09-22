import { TestBed, inject } from '@angular/core/testing';

import { TaskDataService } from './task-data.service';

xdescribe('TaskDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskDataService]
    });
  });

  it('should be created', inject([TaskDataService], (service: TaskDataService) => {
    expect(service).toBeTruthy();
  }));
});
