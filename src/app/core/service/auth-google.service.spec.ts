import { TestBed } from '@angular/core/testing';

import { AuthGoogleService } from './auth-google.service';

describe('AuthGoogleServiceService', () => {
  let service: AuthGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
