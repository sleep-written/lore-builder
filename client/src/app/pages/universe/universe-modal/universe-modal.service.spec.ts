import { TestBed } from '@angular/core/testing';

import { UniverseModalService } from './universe-modal.service';

describe('UniverseModalService', () => {
  let service: UniverseModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniverseModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
