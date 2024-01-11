import { TestBed } from '@angular/core/testing';

import { ManagmentsService } from './managments.service';

describe('ManagmentsService', () => {
  let service: ManagmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
