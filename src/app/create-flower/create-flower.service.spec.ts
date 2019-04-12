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

  it('codifyFlower should put all keys other than name and price in extra fields', () => {
    let testFlower = {
      "extra": "1",
      "fields": "2"
    };
    let service: CreateFlowerService = TestBed.get(CreateFlowerService);
    
    service.codifyFlower(testFlower);
    
    expect(testFlower).toBe({
      "extraFields": {
        "extra": "1",
        "fields": "2"
      }
    });
  });
});
