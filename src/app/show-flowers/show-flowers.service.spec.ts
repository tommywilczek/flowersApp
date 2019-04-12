import { TestBed } from '@angular/core/testing';

import { ShowFlowersService } from './show-flowers.service';

describe('ShowFlowersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowFlowersService = TestBed.get(ShowFlowersService);
    expect(service).toBeTruthy();
  });
});
