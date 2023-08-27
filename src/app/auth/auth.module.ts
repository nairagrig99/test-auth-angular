import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {AuthLocalService} from "./auth-local.service";

export const route: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'signIn',
        pathMatch: 'full'
      },
      {
        path: 'signIn',
        loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
      },
      {
        path: 'signUp',
        loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule)
      }
    ]
  },
]

@NgModule({
  declarations: [AuthComponent],
  imports: [
    RouterModule.forChild(route),
    CommonModule
  ],
  providers: [AuthLocalService]
})
export class AuthModule {
}
