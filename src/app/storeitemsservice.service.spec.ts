import { TestBed } from '@angular/core/testing';

import { StoreitemsserviceService } from './storeitemsservice.service';

describe('StoreitemsserviceService', () => {
  let service: StoreitemsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreitemsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
