import * as fromApplicant from './applicant.reducer';
import { selectApplicantState } from './applicant.selectors';

describe('Applicant Selectors', () => {
  it('should select the feature state', () => {
    const result = selectApplicantState({
      [fromApplicant.applicantFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
