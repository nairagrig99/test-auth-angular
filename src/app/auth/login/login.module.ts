import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatCardModule
    ]
})
export class LoginModule {
}
