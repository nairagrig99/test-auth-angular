import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from "./input/input.component";
import {FormsModule} from "@angular/forms";
import {
  ReactiveFormsModule,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ButtonComponent} from './button/button.component';
import {PostApiService} from "../services/post-api.service";

@NgModule({
  declarations: [InputComponent, ButtonComponent],
  exports: [
    InputComponent,
    ButtonComponent
  ],
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
