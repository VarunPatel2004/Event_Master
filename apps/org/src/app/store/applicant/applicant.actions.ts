
import { createAction, props } from '@ngrx/store';

export const saveApplicantForm = createAction(
  '[Applicant] Save Form',
  props<{ formData: any }>()
);

export const addEventData = createAction(
  '[Applicant] Add Event Data',
  props<{ row: any }>()
);

export const updateEventData = createAction(
  '[Applicant] Update Event Data',
  props<{ index: number; row: any }>()
);

export const deleteEventData = createAction(
  '[Applicant] Delete Event Data',
  props<{ index: number }>()
);

export const uploadFile = createAction(
  '[Applicant] Upload File',
  props<{ fileName: string }>()
);

export const resetApplicant = createAction(
  '[Applicant] Reset'
);
