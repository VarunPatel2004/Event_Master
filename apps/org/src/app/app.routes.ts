import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TredeKonnectUIComponent } from './dashBoard/tredeKonnectUI.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { authGuard } from './auth.guard';

export const appRoutes: Route[] = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'ui',
        component: TredeKonnectUIComponent
      },
      {
        path: 'request',
        component: RequestFormComponent
      }
    ]
  }
];



// import { Route } from '@angular/router';
// import { RequestFormComponent } from './request-form/request-form.component';
// import { TredeKonnectUIComponent } from './dashBoard/tredeKonnectUI.component';
// import { LoginComponent } from './login/login.component';
// import { authGuard } from './auth.guard';
// import { LayoutComponent } from './layout/layout.component';


// export const appRoutes: Route[] = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   {
//     path: 'request', component: RequestFormComponent,
//     canActivate: [authGuard]
//   },
//   {
//     path: 'ui', component: TredeKonnectUIComponent,
//     canActivate: [authGuard]
//   },
//   {
//     path: 'layout', component: LayoutComponent,
//     canActivate: [authGuard]
//   }

// ];
