import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SessionTimeoutService } from '../session-timeout.service';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule, NzIconModule,
    NzFormModule, NzInputModule, NzGridModule, NzFlexModule, NzCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
})
export class LoginComponent {
  // private timeoutId: any;
  constructor(private router: Router,
    private notification: NzNotificationService,
    private sessionTimeoutService: SessionTimeoutService

  ) { }



  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(true)
  })

  passwordVisible = false;

  togglePassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  loginFrom(): void {
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity();
      });
      return;
    }

    const { username, password } = this.loginForm.value;

    if (
      username === 'admin' &&
      password === 'admin123'
    ) {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('username', username ?? '');
      this.notification.success('Login Success', 'WelCome To TradeKonnect',
        { nzPlacement: 'top' }
      )
      sessionStorage.setItem('loginTime', new Date().toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
      ));
      this.sessionTimeoutService.startWatching();
      this.router.navigate(['/ui']);
    } else {
      this.notification.error('Login Failde', 'Please Enter The Correct  UserId And Password',
        { nzPlacement: 'top' }
      )
    }
  }
}


// ngOnInit(): void {
//   this.resetTimeout();
//   document.addEventListener('keypress', this.resetTimeout.bind(this));
// }

// resetTimeout() {
//   clearTimeout(this.timeoutId);
//   this.timeoutId = setTimeout(() => {
//     sessionStorage.clear();
//     this.notification.warning('Session TimeOut', '', { nzPlacement: 'top' });
//     this.router.navigate(['/login'])
//   }, 60 * 1000);
// }
