import { TestBed } from '@angular/core/testing';

import { EarthService } from './earth.service';

describe('EarthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EarthService = TestBed.get(EarthService);
    expect(service).toBeTruthy();
  });
});
