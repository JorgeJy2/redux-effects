import { TestBed } from '@angular/core/testing';

import { AlertWarningService } from './alert-warning.service';

describe('AlertWarningService', () => {
  let service: AlertWarningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertWarningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
