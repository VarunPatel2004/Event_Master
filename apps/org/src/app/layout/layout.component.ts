import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionTimeoutService } from '../session-timeout.service';
import { Router, RouterLink } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, NzIconModule, NzLayoutModule, NzModalModule, RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.less',
})
export class LayoutComponent implements OnInit {
  constructor(private router: Router,
    private sessionTimeoutService: SessionTimeoutService,
  ) { }

  loginTime = '';
  ngOnInit(): void {
    this.loginTime = sessionStorage.getItem('loginTime') || '';
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
  request() {
    this.router.navigate(['/request'])
  }


  user = {
    ID: '123456',
    name: 'Varun',
    email: 'varun@gmail.com',
    address: 'Pune'
  };

}
