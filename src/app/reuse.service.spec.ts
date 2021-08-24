import { TestBed } from '@angular/core/testing';

import { ReuseService } from './reuse.service';

describe('ReuseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReuseService = TestBed.get(ReuseService);
    expect(service).toBeTruthy();
  });
});
