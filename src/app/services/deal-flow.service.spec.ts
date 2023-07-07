import { TestBed } from '@angular/core/testing';

import { DealFlowService } from './deal-flow.service';

describe('DealFlowService', () => {
  let service: DealFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
