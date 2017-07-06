import { TestBed, inject } from '@angular/core/testing';

import { HolidaysService } from './holidays.service';

describe('HolidaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolidaysService]
    });
  });

  it('should ...', inject([HolidaysService], (service: HolidaysService) => {
    expect(service).toBeTruthy();
  }));
});
