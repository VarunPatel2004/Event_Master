export interface ApplicantState {
  applicantFormData: any;
  eventTableData: any[];
  selectedFile: string | null;
}

export const initialState: ApplicantState = {
  applicantFormData: null,
  eventTableData: [],
  selectedFile: null
};
