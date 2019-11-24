import { TestBed } from '@angular/core/testing';

import { ServcontaService } from './servconta.service';

describe('ServcontaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServcontaService = TestBed.get(ServcontaService);
    expect(service).toBeTruthy();
  });
});
