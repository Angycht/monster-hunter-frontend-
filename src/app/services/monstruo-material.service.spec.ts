import { TestBed } from '@angular/core/testing';

import { MonstruoMaterialService } from './monstruo-material.service';

describe('MonstruoMaterialService', () => {
  let service: MonstruoMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonstruoMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
