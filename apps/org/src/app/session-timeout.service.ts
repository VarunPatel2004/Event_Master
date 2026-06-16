import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';


@Injectable({
  providedIn: 'root',

})
export class SessionTimeoutService implements OnDestroy {

  private timeoutId: any;
  private warningId: any;

  constructor(
    private router: Router,
    private modal: NzModalService,

  ) { }

  startWatching(): void {

    document.addEventListener(
      'mousemove',
      () => this.resetTimer()
    );

    document.addEventListener(
      'keypress',
      () => this.resetTimer()
    );

    document.addEventListener(
      'click',
      () => this.resetTimer()
    );

    this.resetTimer();
  }

  resetTimer(): void {

    clearTimeout(this.timeoutId);
    clearTimeout(this.warningId);


    this.warningId = setTimeout(() => {
      this.showWarning();
    }, 1 * 60 * 1000);


    this.timeoutId = setTimeout(() => {
      this.logout();
    }, 2 * 60 * 1000);
  }

  showWarning(): void {

    this.modal.confirm({
      nzTitle: 'Session Timeout',
      nzContent: 'Your session will expire in 1 minute.',
      nzOkText: 'Continue Session',
      nzCancelText: 'Logout',

      nzOnOk: () => {
        this.resetTimer();
      },

      nzOnCancel: () => {
        this.logout();
      }
    });

  }

  logout(): void {

    clearTimeout(this.timeoutId);
    clearTimeout(this.warningId);

    this.modal.closeAll();

    sessionStorage.clear();

    this.router.navigate(['/login']);
  }
  ngOnDestroy(): void {

    this.modal.closeAll();

    clearTimeout(this.timeoutId);
    clearTimeout(this.warningId);
  }

}
