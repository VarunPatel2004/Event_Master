import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './app.state';

import { applicantReducer } from './applicant/applicant.reducer';
import { metaReducers } from './meta-reducers';

export const reducers:
  ActionReducerMap<AppState> = {

  applicant: applicantReducer

};

export { metaReducers }
