import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';

import { Router } from '@angular/router';
@Component({
  selector: 'app-trede-konnect-ui',
  standalone: true,
  imports: [CommonModule, NzCalendarModule, NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule, NzTableModule, NzCardModule, NzGridModule, NzSelectModule, NzInputModule],
  templateUrl: './tredeKonnectUI.component.html',
  styleUrl: './tredeKonnectUI.component.css',
})
export class TredeKonnectUIComponent {

  constructor(private router: Router) { }
  request() {
    this.router.navigate(['/request'])

  }

  transactionData = [
    {
      product: 'Advance Against',
      maker: 0,
      checker: 0,
      authorizer: 0,
      bank: 0
    },
    {
      product: 'Outward Non Trade',
      maker: 0,
      checker: 1,
      authorizer: 0,
      bank: 0
    },
    {
      product: 'Outward Non Trade',
      maker: 0,
      checker: 1,
      authorizer: 0,
      bank: 0
    }, {
      product: 'Outward Non Trade',
      maker: 0,
      checker: 1,
      authorizer: 0,
      bank: 0
    },
    {
      product: 'Outward Non Trade',
      maker: 0,
      checker: 1,
      authorizer: 0,
      bank: 0
    }, {
      product: 'Outward Non Trade',
      maker: 0,
      checker: 1,
      authorizer: 0,
      bank: 0
    }
  ];

}
