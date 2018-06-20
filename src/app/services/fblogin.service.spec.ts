import {inject, TestBed} from '@angular/core/testing';

import {FbloginService} from './fblogin.service';

describe('FbloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbloginService]
    });
  });

  it('should be created', inject([FbloginService], (service: FbloginService) => {
    expect(service).toBeTruthy();
  }));
});
