import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { ApplicantState } from './applicant.state';

export const selectApplicantState =
  createFeatureSelector<ApplicantState>(
    'applicant'
  );

export const selectApplicantForm =
  createSelector(
    selectApplicantState,
    state => state.applicantFormData
  );

export const selectEventTable =
  createSelector(
    selectApplicantState,
    state => state.eventTableData
  );

export const selectFile =
  createSelector(
    selectApplicantState,
    state => state.selectedFile
  );
