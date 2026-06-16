import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';

import { InboxOutline, UploadOutline } from '@ant-design/icons-angular/icons';

import { provideNzIcons } from 'ng-zorro-antd/icon';
import { EditOutline, DeleteOutline, PlusOutline, SaveOutline, LogoutOutline } from '@ant-design/icons-angular/icons';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { reducers } from './store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { importProvidersFrom } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';





const icons = [
  EditOutline,
  DeleteOutline,
  PlusOutline,
  SaveOutline,
  InboxOutline,
  UploadOutline,
  LogoutOutline,


];

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimations(),
    provideNzIcons(icons),
    provideNzI18n(en_US),
    provideNzIcons([InboxOutline]),
    provideHttpClient(),
    provideStore(reducers),
    provideNzIcons([LogoutOutline]),

    importProvidersFrom(NzModalModule),
    provideStoreDevtools({
      maxAge: 25
    })
  ],
};
