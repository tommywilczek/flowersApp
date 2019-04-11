import { TestBed } from '@angular/core/testing';

import { CreateFlowerService } from './create-flower.service';

describe('CreateFlowerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateFlowerService = TestBed.get(CreateFlowerService);
    expect(service).toBeTruthy();
  });
});
