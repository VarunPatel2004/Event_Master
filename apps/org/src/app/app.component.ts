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
// import { NzIconModule } from 'ng-zorro-antd/icon';

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
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private message = inject(NzMessageService);

  validateForm!: FormGroup;

  tableData: any[] = [];

  editIndex: number | null = null;

  currencyList = [
    {
      label: 'USD',
      value: 'USD',
      rate: 83.0,
    },
    {
      label: 'INR',
      value: 'INR',
      rate: 1.0,
    },
    {
      label: 'EUR',
      value: 'EUR',
      rate: 90.0,
    },
    {
      label: 'GBP',
      value: 'GBP',
      rate: 105.0,
    },
    {
      label: 'JPY',
      value: 'JPY',
      rate: 0.56,
    },
    {
      label: 'AUD',
      value: 'AUD',
      rate: 55.0,
    },
    {
      label: 'CAD',
      value: 'CAD',
      rate: 61.0,
    },
    {
      label: 'SGD',
      value: 'SGD',
      rate: 62.0,
    },
    {
      label: 'AED',
      value: 'AED',
      rate: 22.5,
    },
    {
      label: 'CNY',
      value: 'CNY',
      rate: 11.5,
    },
    {
      label: 'CHF',
      value: 'CHF',
      rate: 95.0,
    },
    {
      label: 'NZD',
      value: 'NZD',
      rate: 50.0,
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
    this.currencySyncLogic();
    this.amountCalculationLogic();
  }

  initializeForm(): void {
    this.validateForm = new FormGroup({
      firstCurrency: new FormControl('USD', Validators.required),

      firstAmount: new FormControl(null, Validators.required),

      firstRate: new FormControl({
        value: 83,
        disabled: true,
      }),

      firstInrAmount: new FormControl(null, [Validators.required]),

      accountNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
      ]),
    });
  }

  getRate(currency: string): number {
    return this.currencyList.find((x) => x.value === currency)?.rate || 1;
  }

  currencySyncLogic(): void {
    this.validateForm
      .get('firstCurrency')
      ?.valueChanges.subscribe((currency) => {
        const rate = this.getRate(currency);

        this.validateForm.patchValue(
          {
            firstRate: rate,
          },
          {
            emitEvent: false,
          }
        );

        this.calculateFirstInr();
      });
  }

  amountCalculationLogic(): void {
    this.validateForm.get('firstAmount')?.valueChanges.subscribe(() => {
      this.calculateFirstInr();
    });

    this.validateForm.get('firstInrAmount')?.valueChanges.subscribe((value) => {
      const rate = this.validateForm.getRawValue().firstRate;

      if (value && rate) {
        const amount = Number(value) / Number(rate);

        this.validateForm.patchValue(
          {
            firstAmount: Number(amount.toFixed(2)),
          },
          {
            emitEvent: false,
          }
        );
      }
    });
  }

  calculateFirstInr(): void {
    const amount = this.validateForm.get('firstAmount')?.value;

    const rate = this.validateForm.getRawValue().firstRate;

    if (amount && rate) {
      const inrAmount = Number(amount) * Number(rate);

      this.validateForm.patchValue(
        {
          firstInrAmount: Number(inrAmount.toFixed(2)),
        },
        {
          emitEvent: false,
        }
      );
    }
  }

  submitForm(): void {
    if (this.validateForm.invalid) {
      this.validateForm.markAllAsTouched();
      return;
    }

    const data = this.validateForm.getRawValue();

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

  deleteRow(index: number): void {
    this.tableData.splice(index, 1);

    this.tableData = [...this.tableData];

    this.message.success('Deleted Successfully');
  }

  resetForm(): void {
    this.validateForm.reset({
      firstCurrency: 'USD',
      firstAmount: null,
      firstRate: 83,
      firstInrAmount: null,
      accountNumber: '',
    });

    this.editIndex = null;
  }
}
