import { TestBed } from '@angular/core/testing';

import { VendasCarrosService } from './vendas-carros.service';

describe('VendasCarrosService', () => {
  let service: VendasCarrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendasCarrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
