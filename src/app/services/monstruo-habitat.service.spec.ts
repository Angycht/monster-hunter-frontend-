import { TestBed } from '@angular/core/testing';

import { MonstruoHabitatService } from './monstruo-habitat.service';

describe('MonstruoHabitatService', () => {
  let service: MonstruoHabitatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonstruoHabitatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
