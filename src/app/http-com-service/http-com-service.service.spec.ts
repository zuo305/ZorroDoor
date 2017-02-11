/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpComServiceService } from './http-com-service.service';

describe('HttpComServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpComServiceService]
    });
  });

  it('should ...', inject([HttpComServiceService], (service: HttpComServiceService) => {
    expect(service).toBeTruthy();
  }));
});
