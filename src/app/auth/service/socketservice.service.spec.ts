import { TestBed } from '@angular/core/testing';

import { SocketserviceService } from './socketservice.service';

describe('SocketserviceService', () => {
  let service: SocketserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
