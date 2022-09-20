import { TestBed } from '@angular/core/testing';

import { TypeChambreService } from './type-chambre.service';

describe('TypeChambreService', () => {
  let service: TypeChambreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeChambreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
