import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ApplicantEffects } from './applicant.effects';

describe('ApplicantEffects', () => {
  let actions$: Observable<any>;
  let effects: ApplicantEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApplicantEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ApplicantEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
