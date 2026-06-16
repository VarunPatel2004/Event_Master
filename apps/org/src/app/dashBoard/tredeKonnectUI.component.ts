import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { SessionTimeoutService } from '../session-timeout.service';

import { Router } from '@angular/router';
import { NzButtonComponent } from "ng-zorro-antd/button";
@Component({
  selector: 'app-trede-konnect-ui',
  standalone: true,
  imports: [CommonModule, NzIconModule, NzModalModule, NzCalendarModule, NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule, NzTableModule, NzCardModule, NzGridModule, NzSelectModule, NzInputModule, NzButtonComponent],
  templateUrl: './tredeKonnectUI.component.html',
  styleUrl: './tredeKonnectUI.component.css',
})
export class TredeKonnectUIComponent {

  constructor(private router: Router,
    private sessionTimeoutService: SessionTimeoutService,
  ) { }

  request() {
    this.router.navigate(['/request']);
  }

  isVisible = false;

  showUserInfo(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  logout(): void {
    this.sessionTimeoutService.logout();
  }

  user = {
    ID: '123456',
    name: 'Varun',
    email: 'varun@gmail.com',
    address: 'Pune'
  };



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













  // private timeoutId: any;
  // private warningId: any;
  // constructor(private router: Router,
  //   private modal: NzModalService,

  // ) { }

  // isVisible = false;
  // showUserInfo(): void {
  //   console.log(this.user);
  //   console.log('clicked');
  //   this.isVisible = true;
  // }
  // handleCancel(): void {
  //   this.isVisible = false;
  // }
  // user = {
  //   ID: '123456',
  //   name: 'Varun',
  //   email: 'varun@gmail.com',
  //   address: 'Pune'
  // };
  // request() {
  //   this.router.navigate(['/request'])

  // }
  // ngOnInit(): void {
  //   this.resetTimeout();
  //   document.addEventListener('keypress',
  //     this.resetTimeout.bind(this));
  //   document.addEventListener('mausemove',
  //     this.resetTimeout.bind(this));

  // }

  // resetTimeout(): void {

  //   clearTimeout(this.timeoutId);
  //   clearTimeout(this.warningId);
  //   this.warningId = setTimeout(() => {
  //     this.SessionWarning();
  //   }, 1 * 60 * 1000)
  //   this.timeoutId = setTimeout(() => {
  //     this.logout();
  //     // this.notifiacation.warning('Session Timeout', '', { nzPlacement: 'top' });
  //     // this.router.navigate(['/login'])

  //   }, 2 * 60 * 1000)

  // }

  // SessionWarning(): void {

  //   this.modal.confirm({
  //     nzTitle: 'Session Expiring',
  //     nzContent:
  //       'Your session will expire in 1 minute. Do you want to continue?',
  //     nzOkText: 'Continue Session',
  //     nzCancelText: 'Logout',

  //     nzOnOk: () => {
  //       this.resetTimeout();
  //     },

  //     nzOnCancel: () => {
  //       this.logout();
  //     }
  //   });

  // }

  // logout() {
  //   this.modal.closeAll();
  //   sessionStorage.clear();
  //   this.router.navigate(['/login']);
  // }

  // ngOnDestroy(): void {

  // this.modal.closeAll();

  // clearTimeout(this.timeoutId);
  // clearTimeout(this.warningId);

