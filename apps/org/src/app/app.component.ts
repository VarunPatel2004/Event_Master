import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzButtonModule,
    NzTableModule,
    NzGridModule,
    NzResultModule,
    NzCardModule,
    NzSpaceModule,
    // NzIconModule.forRoot(),
    NzPaginationModule,
    NzIconModule,
    NzPopconfirmModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private message = inject(NzMessageService);

  validateForm!: FormGroup;
  selecrform!: FormGroup;
  nzPageIndex = 1;

  nzPageSize = 10;

  tableData: any[] = [];

  editIndex: number | null = null;

  currencyList = [
    {
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
    },
  ];

  accountNumberList = [
    {
      value: '1002003001',
    },
    {
      value: '1002003002',
    },
    {
      value: '1002003003',
    },
    {
      value: '1002003004',
    },
    {
      value: '1002003005',
    },
    {
      value: '1002003006',
    },
    {
      value: '1002003007',
    },
    {
      value: '1002003008',
    },
    {
      value: '1002003009',
    },
    {
      value: '1002003010',
    },
  ];

  ngOnInit(): void {
    this.initializeForm();
    this.currencySyncLogic(this.validateForm);
    this.currencySyncLogic(this.selecrform);

    this.amountCalculationLogic(this.validateForm);
    this.amountCalculationLogic(this.selecrform);

    this.accountSelectionLogic();
  }

  initializeForm(): void {
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

      accountNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
      ]),
    });

    this.selecrform = new FormGroup({
      firstCurrency: new FormControl(null, Validators.required),
      firstAmount: new FormControl(null, Validators.required),
      firstRate: new FormControl({ value: null, disabled: true }),
      firstInrAmount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,4})?$/),
      ]),
      accountNumber: new FormControl('', [
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
      (item) => item.accountNumber === data.accountNumber
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

    this.resetForm();
  }

  editRow(index: number): void {
    this.editIndex = index;

    const row = this.tableData[index];

    this.validateForm.patchValue({
      firstCurrency: row.firstCurrency,
      firstAmount: row.firstAmount,
      firstRate: row.firstRate,
      firstInrAmount: row.firstInrAmount,
      accountNumber: row.accountNumber,
    });
  }
  cancel(): void {
    this.message.info('Deletecancelled');
  }
  deleteRow(index: number): void {
    this.tableData.splice(index, 1);

    this.tableData = [...this.tableData];

    this.message.success('Deleted Successfully');
  }

  resetForm(): void {
    this.validateForm.reset({
      firstCurrency: null,
      firstAmount: null,
      firstRate: null,
      firstInrAmount: null,
      accountNumber: '',
    });

    this.editIndex = null;
  }

  accountSelectionLogic(): void {
    this.selecrform
      .get('accountNumber')
      ?.valueChanges.subscribe((accountNo) => {
        if (!accountNo) {
          return;
        }

        if (this.selecrform.invalid) {
          return;
        }
        this.addrecord();
      });
  }

  addrecord(): void {
    Object.values(this.selecrform.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });

    if (this.selecrform.invalid) {
      return;
    }

    const data = this.selecrform.getRawValue();

    if (!data.accountNumber) {
      return;
    }

    const exists = this.tableData.some(
      (item) => item.accountNumber === data.accountNumber
    );

    if (exists) {
      this.message.info('Account Number already exists!');
      return;
    }

    this.tableData = [...this.tableData, data];
    this.message.success('Record Added Succefully');

    this.selecrform.markAsPristine();
    this.selecrform.markAsUntouched();

    Object.values(this.selecrform.controls).forEach((control) => {
      control.markAsPristine();
      control.markAsUntouched();
      control.updateValueAndValidity({ emitEvent: false });
    });
  }
}
