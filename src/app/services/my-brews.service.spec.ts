import { TestBed } from '@angular/core/testing';

import { MyBrewsService } from './my-brews.service';

describe('MyBrewsService', () => {
  let service: MyBrewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBrewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
