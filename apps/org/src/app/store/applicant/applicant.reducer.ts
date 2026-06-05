
import { createReducer, on } from '@ngrx/store';

import * as ApplicantActions from './applicant.actions';

import {

  initialState
} from './applicant.state';

export const applicantReducer = createReducer(

  initialState,

  on(
    ApplicantActions.saveApplicantForm,
    (state, { formData }) => ({
      ...state,
      applicantFormData: formData
    })
  ),
  on(
    ApplicantActions.saveEventTable,
    (state, { tableData }) => ({
      ...state,
      eventTableData: tableData
    })
  ),
  on(
    ApplicantActions.addEventData,
    (state, { row }) => ({
      ...state,
      eventTableData: [...state.eventTableData, row]
    })
  ),

  on(
    ApplicantActions.updateEventData,
    (state, { index, row }) => ({
      ...state,
      eventTableData: state.eventTableData.map(
        (item, i) => i === index ? row : item
      )
    })
  ),

  on(
    ApplicantActions.deleteEventData,
    (state, { index }) => ({
      ...state,
      eventTableData: state.eventTableData.filter(
        (_, i) => i !== index
      )
    })
  ),


  on(ApplicantActions.uploadFile, (state, { fileName, fileBytes }) => ({
    ...state,
    selectedFileName: fileName,
    fileBytes: fileBytes
  })),






  on(
    ApplicantActions.uploadFile,
    (state, { fileName }) => ({
      ...state,
      selectedFile: fileName
    })
  ),

  on(
    ApplicantActions.resetApplicant,
    () => initialState
  )
);
// import { createFeature, createReducer, on } from '@ngrx/store';
// import { ApplicantActions } from './applicant.actions';

// export const applicantFeatureKey = 'applicant';

// export interface State {

// }

// export const initialState: State = {

// };

// export const reducer = createReducer(
//   initialState,
//   on(ApplicantActions.loadApplicants, state => state),

// );

// export const applicantFeature = createFeature({
//   name: applicantFeatureKey,
//   reducer,
// });
