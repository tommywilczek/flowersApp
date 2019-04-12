import { TestBed } from '@angular/core/testing';

import { CreateFlowerService } from './create-flower.service';
import { HttpClientModule } from '@angular/common/http';

describe('CreateFlowerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: CreateFlowerService = TestBed.get(CreateFlowerService);
    expect(service).toBeTruthy();
  });
});
