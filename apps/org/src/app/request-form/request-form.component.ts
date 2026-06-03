import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [CommonModule, NzCardModule],
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestFormComponent { }
