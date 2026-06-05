
import { createAction, props } from '@ngrx/store';
import { EventRow, ApplicantFormData } from './applicant.state';
export const saveApplicantForm = createAction(
  '[Applicant] Save Form',
  props<{ formData: ApplicantFormData }>()
);

export const saveEventTable = createAction(
  '[Applicant] Save Event Table',
  props<{ tableData: EventRow[] }>()
);

export const addEventData = createAction(
  '[Applicant] Add Event Data',
  props<{ row: EventRow }>()
);

export const updateEventData = createAction(
  '[Applicant] Update Event Data',
  props<{ index: number; row: EventRow }>()
);

export const deleteEventData = createAction(
  '[Applicant] Delete Event Data',
  props<{ index: number }>()
);


export const uploadFile = createAction(
  '[Applicant] Upload File',
  props<{
    fileName: string;
    fileBytes: number[];
  }>()
);
// export const uploadFile = createAction(
//   '[Applicant] Upload File',
//   props<{ fileName: string }>()
// );

export const resetApplicant = createAction(
  '[Applicant] Reset'
);
