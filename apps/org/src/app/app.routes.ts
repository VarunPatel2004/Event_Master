import { Route } from '@angular/router';
import { RequestFormComponent } from './request-form/request-form.component';
import { TredeKonnectUIComponent } from './dashBoard/tredeKonnectUI.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';


export const appRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'request', component: RequestFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'ui', component: TredeKonnectUIComponent,
    canActivate: [authGuard]
  }

];
