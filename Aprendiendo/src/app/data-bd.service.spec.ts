import { TestBed } from '@angular/core/testing';

import { DataBDService } from './data-bd.service';

describe('DataBDService', () => {
  let service: DataBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
