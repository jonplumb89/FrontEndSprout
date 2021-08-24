import { TestBed } from '@angular/core/testing';

import { FlowerRandomizationService } from './flower-randomization.service';

describe('FlowerRandomizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowerRandomizationService = TestBed.get(FlowerRandomizationService);
    expect(service).toBeTruthy();
  });
});
