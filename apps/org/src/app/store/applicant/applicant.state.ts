export interface ApplicantFormData {
  applicantName: string;
  address1: string;
  address2: string;
  address3: string;
  mobile: string;
  email: string;
  currency: string;
  amount: number;
  accountNumber: string;
  solId: string;
  solLocation: string;
  transactionDate: string;
  eventData?: EventRow[];

  fileName?: string;
  fileBytes: number[] | null;

}
export interface EventRow {
  accountNumber2: string;
  firstCurrency: string;
  firstAmount: number;
  firstRate: number;
  firstInrAmount: number;
}

export interface ApplicantState {
  applicantFormData: ApplicantFormData | null;
  eventTableData: EventRow[];
  selectedFile: string | null;
}
export interface AccountData {
  accountNumber: string;
  currency: string;
  solId: string;
  solLocation: string;
}
export const initialState: ApplicantState = {
  applicantFormData: null,
  eventTableData: [],
  selectedFile: null
};

