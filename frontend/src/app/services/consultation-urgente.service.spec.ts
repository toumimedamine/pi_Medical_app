import { TestBed } from '@angular/core/testing';

import { ConsultationUrgenteService } from './consultation-urgente.service';

describe('ConsultationUrgenteService', () => {
  let service: ConsultationUrgenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationUrgenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
