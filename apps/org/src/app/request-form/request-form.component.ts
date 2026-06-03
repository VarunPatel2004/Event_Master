
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzUploadChangeParam, NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ChangeDetectionStrategy } from '@angular/core';

interface AccountData {
  accountNumber: string;
  currency: string;
  solId: string;
  solLocation: string;
}

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzGridModule,
    NzUploadModule,
    NzMessageModule,
    NzIconModule,
    NzResultModule,
    NzTableModule,
    NzDatePickerModule,
    RouterModule,
    RouterOutlet,
    NzCollapseModule,
    NzPopconfirmModule


  ],
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestFormComponent implements OnInit {

  applicantForm!: FormGroup;

  // fileList: NzUploadFile[] = [];
  uploadedDocuments: File[] = [];
  submittedRecords: any[] = [];
  validateForm!: FormGroup;

  nzPageIndex = 1;

  nzPageSize = 10;

  tableData: any[] = [];

  editIndex: number | null = null;
  date = null;
  isEnglish = false;
  fileUrl!: SafeResourceUrl;
  pdfUrl: SafeResourceUrl | null = null;
  isImage = false;

  isPdf = false;
  selectedFile: File | null = null;

  currencyList = [{
    label: 'USD',
    value: 'USD',
    rate: 83.3245,
  },
  {
    label: 'INR',
    value: 'INR',
    rate: 1.0,
  },
  {
    label: 'EUR',
    value: 'EUR',
    rate: 90.4567,
  },
  {
    label: 'GBP',
    value: 'GBP',
    rate: 105.7891,
  },
  {
    label: 'JPY',
    value: 'JPY',
    rate: 0.5634,
  },
  {
    label: 'AUD',
    value: 'AUD',
    rate: 55.3245,
  },
  {
    label: 'CAD',
    value: 'CAD',
    rate: 61.4523,
  },
  {
    label: 'SGD',
    value: 'SGD',
    rate: 62.7812,
  },
  {
    label: 'AED',
    value: 'AED',
    rate: 22.5678,
  },
  {
    label: 'CNY',
    value: 'CNY',
    rate: 11.5432,
  },
  {
    label: 'CHF',
    value: 'CHF',
    rate: 95.6789,
  },
  {
    label: 'NZD',
    value: 'NZD',
    rate: 50.3245,
  }
  ];



  accountList: AccountData[] = [
    {
      accountNumber: '123456',
      currency: 'USD',
      solId: '0123',
      solLocation: 'Swargate'
    },
    {
      accountNumber: '456789',
      currency: 'EUR',
      solId: '0456',
      solLocation: 'Shivajinagar'
    },
    {
      accountNumber: '789123',
      currency: 'GBP',
      solId: '0789',
      solLocation: 'Hadapsar'
    },
    {
      accountNumber: '111111',
      currency: 'INR',
      solId: '0101',
      solLocation: 'Kothrud'
    },
    {
      accountNumber: '222222',
      currency: 'USD',
      solId: '0102',
      solLocation: 'Baner'
    },
    {
      accountNumber: '333333',
      currency: 'EUR',
      solId: '0103',
      solLocation: 'Aundh'
    },
    {
      accountNumber: '444444',
      currency: 'GBP',
      solId: '0104',
      solLocation: 'Wakad'
    },
    {
      accountNumber: '555555',
      currency: 'AUD',
      solId: '0105',
      solLocation: 'Pimpri'
    },
    {
      accountNumber: '666666',
      currency: 'CAD',
      solId: '0106',
      solLocation: 'Chinchwad'
    },
    {
      accountNumber: '777777',
      currency: 'SGD',
      solId: '0107',
      solLocation: 'Nigdi'
    },
    {
      accountNumber: '888888',
      currency: 'AED',
      solId: '0108',
      solLocation: 'Camp'
    },
    {
      accountNumber: '999999',
      currency: 'CHF',
      solId: '0109',
      solLocation: 'Kharadi'
    },
    {
      accountNumber: '121212',
      currency: 'JPY',
      solId: '0110',
      solLocation: 'Magarpatta'
    },
    {
      accountNumber: '232323',
      currency: 'NZD',
      solId: '0111',
      solLocation: 'Viman Nagar'
    },
    {
      accountNumber: '343434',
      currency: 'USD',
      solId: '0112',
      solLocation: 'Yerawada'
    },
    {
      accountNumber: '454545',
      currency: 'EUR',
      solId: '0113',
      solLocation: 'Pashan'
    },
    {
      accountNumber: '565656',
      currency: 'GBP',
      solId: '0114',
      solLocation: 'Bavdhan'
    },
    {
      accountNumber: '676767',
      currency: 'INR',
      solId: '0115',
      solLocation: 'Warje'
    },
    {
      accountNumber: '787878',
      currency: 'AUD',
      solId: '0116',
      solLocation: 'Dhankawadi'
    },
    {
      accountNumber: '898989',
      currency: 'CAD',
      solId: '0117',
      solLocation: 'Sinhagad Road'
    }
  ];

  constructor(
    private message: NzMessageService,
    private sanitizer: DomSanitizer

  ) { }




  ngOnInit(): void {
    this.initializeForm();
    this.currencySyncLogic(this.validateForm);
    // this.currencySyncLogic(this.applicantForm);
    this.amountCalculationLogic(this.validateForm);
    // this.amountCalculationLogic(this.applicantForm);

  }

  initializeForm(): void {
    this.applicantForm = new FormGroup({

      applicantName: new FormControl('', Validators.required),

      address1: new FormControl('', Validators.required),

      address2: new FormControl('', Validators.required),

      address3: new FormControl('', Validators.required),

      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),


      currency: new FormControl('', Validators.required),

      amount: new FormControl(null, [
        Validators.required,
        Validators.min(1)
      ]),

      accountNumber: new FormControl('', Validators.required),

      solId: new FormControl({
        value: '',
        disabled: true
      }),

      solLocation: new FormControl({
        value: '',
        disabled: true
      }),
      transactionDate: new FormControl(null, Validators.required)


    });

    this.validateForm = new FormGroup({
      firstCurrency: new FormControl(null, Validators.required),

      firstAmount: new FormControl(null, Validators.required),

      firstRate: new FormControl({
        value: null,
        disabled: true,
      }),


      firstInrAmount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,4})?$/),
      ]),

      accountNumber2: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
      ]),
    });
  }

  getRate(currency: string): number | null {
    return this.currencyList.find((x) => x.value === currency)?.rate ?? null;
  }

  currencySyncLogic(form: FormGroup): void {
    form.get('firstCurrency')?.valueChanges.subscribe((currency) => {
      const rate = this.getRate(currency);

      form.patchValue(
        {
          firstRate: rate,
        },
        {
          emitEvent: false,
        }
      );

      this.calculateFirstInr(form);
    });
  }
  amountCalculationLogic(form: FormGroup): void {
    form.get('firstAmount')?.valueChanges.subscribe(() => {
      this.calculateFirstInr(form);
    });

    form.get('firstInrAmount')?.valueChanges.subscribe((value) => {
      const rate = form.getRawValue().firstRate;

      if (value && rate) {
        const amount = Number(value) / Number(rate);

        form.patchValue(
          {
            firstAmount: Number(amount.toFixed(4)),
          },
          {
            emitEvent: false,
          }
        );
      }
    });
  }
  onNameInput(): void {
    const control = this.applicantForm.get('applicantName');

    if (control) {
      const value = (control.value || '')
        .replace(/[^a-zA-Z ]/g, '')
        .toUpperCase();

      control.setValue(value, { emitEvent: false });
    }
  }
  calculateFirstInr(form: FormGroup): void {
    const amount = form.get('firstAmount')?.value;

    const rate = form.getRawValue().firstRate;

    if (rate > 0) {
      const inrAmount = Number(amount) * Number(rate);

      form.patchValue(
        {
          firstInrAmount: Number(inrAmount.toFixed(4)),
        },
        {
          emitEvent: false,
        }
      );
    }
  }
  submitForm(): void {
    if (this.validateForm.invalid) {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    const data = this.validateForm.getRawValue();
    const exists = this.tableData.some(
      (item, index) =>
        item.accountNumber2 === data.accountNumber2 &&
        index !== this.editIndex
    );

    if (exists) {
      this.message.info('Account Number already exists!');
      return;
    }

    if (this.editIndex !== null) {
      this.tableData[this.editIndex] = data;

      this.tableData = [...this.tableData];

      this.message.success('Updated Successfully');

      this.editIndex = null;
    } else {
      this.tableData = [...this.tableData, data];

      this.message.success('Added Successfully');
    }

    this.validateForm.reset();
  }

  editRow(index: number): void {
    console.log('Edit Clicked', index);
    this.editIndex = index;

    const row = this.tableData[index];

    this.validateForm.patchValue({
      firstCurrency: row.firstCurrency,
      firstAmount: row.firstAmount,
      firstRate: row.firstRate,
      firstInrAmount: row.firstInrAmount,
      accountNumber2: row.accountNumber2,
    });
  }
  cancel(): void {
    this.message.info('Deletecancelled');
  }
  deleteRow(index: number): void {
    console.log('delete', index);
    this.tableData.splice(index, 1);

    this.tableData = [...this.tableData];

    this.message.success('Deleted Successfully');
  }




  // addform(): void {
  //   if (this.validateForm.invalid) {
  //     Object.values(this.validateForm.controls).forEach((control) => {
  //       if (control.invalid) {
  //         control.markAsDirty();
  //         control.updateValueAndValidity({ onlySelf: true });
  //       }
  //     });
  //     return;
  //   }

  //   const data = this.validateForm.getRawValue();

  //   // Format Transaction Date
  //   if (data.transactionDate) {
  //     const date = new Date(data.transactionDate);

  //     data.transactionDate =
  //       `${date.getDate().toString().padStart(2, '0')}/` +
  //       `${(date.getMonth() + 1).toString().padStart(2, '0')}/` +
  //       `${date.getFullYear()}`;
  //   }

  //   const exists = this.tableData.some(
  //     (item) =>
  //       item.accountNumber2 === data.accountNumber2 &&
  //       this.editIndex === null
  //   );

  //   if (exists) {
  //     this.message.info('Account Number already exists!');
  //     return;
  //   }

  //   if (this.editIndex !== null) {
  //     this.tableData[this.editIndex] = data;
  //     this.tableData = [...this.tableData];
  //     this.message.success('Updated Successfully');
  //     this.editIndex = null;
  //   } else {
  //     this.tableData = [...this.tableData, data];
  //     this.message.success('Added Successfully');
  //   }

  //   console.log(this.tableData);
  //   this.resetForm();
  // }


  // editRow(index: number): void {
  //   this.editIndex = index;

  //   const row = this.tableData[index];

  //   this.validateForm.patchValue({
  //     firstCurrency: row.firstCurrency,
  //     firstAmount: row.firstAmount,
  //     firstRate: row.firstRate,
  //     firstInrAmount: row.firstInrAmount,
  //     accountNumber2: row.accountNumber2,
  //   });
  // }
  // cancel(): void {
  //   this.message.info('Deletecancelled');
  // }
  // deleteRow(index: number): void {
  //   this.tableData.splice(index, 1);

  //   this.tableData = [...this.tableData];

  //   this.message.success('Deleted Successfully');
  // }

  onAccountChange(accountNumber: string): void {

    const selectedAccount = this.accountList.find(
      account =>
        account.accountNumber === accountNumber
    );

    if (selectedAccount) {

      this.applicantForm.patchValue({
        currency: selectedAccount.currency,
        solId: selectedAccount.solId,
        solLocation: selectedAccount.solLocation
      });

    }
  }

  // beforeUpload = (file: NzUploadFile): boolean => {

  //   this.fileList = [...this.fileList, file];

  //   if (file.type === 'application/pdf') {

  //     const pdfBlobUrl = URL.createObjectURL(file as any);

  //     this.pdfUrl =
  //       this.sanitizer.bypassSecurityTrustResourceUrl(pdfBlobUrl);
  //   }

  //   return false;
  // };

  // removeFile = (file: NzUploadFile): boolean => {

  //   this.fileList = this.fileList.filter(
  //     item => item.uid !== file.uid
  //   );

  //   this.pdfUrl = null;

  //   return true;
  // };

  // handleChange(info: NzUploadChangeParam): void {

  //   this.fileList = [...info.fileList];

  //   if (info.file.status === 'done') {
  //     this.message.success(`${info.file.name} uploaded successfully`);
  //   }

  //   if (info.file.status === 'error') {
  //     this.message.error(`${info.file.name} upload failed`);
  //   }
  // }

  submitForm1(): void {

    Object.values(
      this.applicantForm.controls
    ).forEach(control => {

      control.markAsDirty();

      control.updateValueAndValidity();

    });


    Object.keys(this.applicantForm.controls).forEach(key => {
      const control = this.applicantForm.get(key);

      if (control?.invalid) {
        console.log('Invalid Field:', key);
        console.log('Value:', control.value);
        console.log('Errors:', control.errors);
      }
    });

    if (this.applicantForm.invalid) {

      this.message.error(
        'Please fill all mandatory fields'
      );

      return;
    }

    // if (this.fileList.length === 0) {

    //   this.message.error(
    //     'Please upload at least one document'
    //   );

    //   return;
    // }
    const formData =
      this.applicantForm.getRawValue();

    const payload = {
      applicantName: formData.applicantName,
      address1: formData.address1,
      address2: formData.address2,
      address3: formData.address3,
      mobile: formData.mobile,
      email: formData.email,

      currency:
        formData.currency,

      amount:
        formData.amount,

      accountNumber:
        formData.accountNumber,

      solId:
        formData.solId,

      solLocation:
        formData.solLocation,

      documents: this.selectedFile
        ? [{ fileName: this.selectedFile.name }]
        : []
    };

    const txnDetails = {
      ...payload,
      eventData: [...this.tableData]
    }

    console.log(
      'Current Record',
      txnDetails
    );

    this.message.success(
      'Record Submitted Successfully'
    );

    this.resetForm();
  }

  resetForm(): void {
    this.applicantForm.reset();
    this.validateForm.reset();

    this.editIndex = null;
    this.uploadedDocuments = [];
    this.selectedFile = null;
    this.isPdf = false;
    this.pdfUrl = null;


  }

  exit(): void {

    this.resetForm();

    this.message.info(
      'Form Cleared'
    );

  }
  disabledDate = (current: Date): boolean => {
    return current > new Date();

  }

  // onFileSelected(event: Event): void {

  //   const input = event.target as HTMLInputElement;

  //   if (!input.files || input.files.length === 0) {
  //     return;
  //   }

  //   const file = input.files[0];

  //   this.selectedFile = file;

  //   const objectUrl = URL.createObjectURL(file);

  //   this.isPdf = file.type === 'application/pdf';

  //   this.fileUrl =
  //     this.sanitizer.bypassSecurityTrustResourceUrl(objectUrl);
  // }

  // onFileSelected(event: Event): void {

  //   const input = event.target as HTMLInputElement;

  //   if (!input.files || input.files.length === 0) {
  //     return;
  //   }

  //   const file = input.files[0];

  //   this.selectedFile = file;

  //   const url = URL.createObjectURL(file);

  //   this.isPdf = file.type === 'application/pdf';

  //   this.fileUrl = url;

  //   console.log(file);
  // }


  payload: any = {
    document: null
  };

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.selectedFile = file;
      this.payload.document = file;
    }
  }


  onMobileInput(): void {
    const control = this.applicantForm.get('mobile');

    if (control) {
      const value = (control.value || '')
        .replace(/\D/g, '') // remove non-numeric characters
        .slice(0, 10);      // limit to 10 digits

      control.setValue(value, { emitEvent: false });
    }
  }
}





