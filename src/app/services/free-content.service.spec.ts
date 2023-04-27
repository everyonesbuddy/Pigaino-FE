import { TestBed } from '@angular/core/testing';

import { FreeContentService } from './free-content.service';

describe('FreeContentService', () => {
  let service: FreeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
