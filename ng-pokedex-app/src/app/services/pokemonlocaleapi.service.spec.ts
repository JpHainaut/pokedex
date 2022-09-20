import { TestBed } from '@angular/core/testing';

import { PokemonlocaleapiService } from './pokemonlocaleapi.service';

describe('PokemonlocaleapiService', () => {
  let service: PokemonlocaleapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonlocaleapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
