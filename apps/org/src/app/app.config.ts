import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';

import { InboxOutline, UploadOutline } from '@ant-design/icons-angular/icons';

import { provideNzIcons } from 'ng-zorro-antd/icon';
import {
  EditOutline,
  DeleteOutline,
  PlusOutline,
  SaveOutline,
} from '@ant-design/icons-angular/icons';
import { provideHttpClient } from '@angular/common/http';

const icons = [
  EditOutline,
  DeleteOutline,
  PlusOutline,
  SaveOutline,
  InboxOutline,
  UploadOutline,

];



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimations(),
    provideNzIcons(icons),
    provideNzI18n(en_US),
    provideNzIcons([InboxOutline]),
    provideHttpClient()
  ],
};
