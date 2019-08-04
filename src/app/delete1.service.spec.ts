import { TestBed } from '@angular/core/testing';

import { Delete1Service } from './delete1.service';

describe('Delete1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Delete1Service = TestBed.get(Delete1Service);
    expect(service).toBeTruthy();
  });
});
