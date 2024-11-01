import { TestBed } from '@angular/core/testing';

import { GetPalListService } from './get-pal-list.service';

describe('GetPalListService', () => {
  let service: GetPalListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPalListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
