import { TestBed } from '@angular/core/testing';

import { ToDoService } from './todoservices.service';

describe('ToDoService', () => {
  let service: ToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(ToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
