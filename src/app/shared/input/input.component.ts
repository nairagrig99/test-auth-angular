import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {InputTypeEnum} from "../../interface/input-type.enum";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @Input() label!: string;
  @Input() type!: string;
  @Input() formControl: any;
  @Input() name: any;
  @Input() valid: boolean = false;
  @Input() msgError!: string;
  @Input() isPassword: boolean = false;

  public changePasswordType = InputTypeEnum.psw;
  public input!: string;

  constructor() {
  }

  get value(): any {
    return this.input;
  }

  set value(v: any) {
    if (v !== this.input) {
      this.input = v;
      this.onChange(v);
    }
  }

  onChange: any = () => {
  }

  onTouch: any = () => {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.onTouch = fn
  }

  changeInput(s: any): void {
    this.onChange(s);
    this.onTouch(s)
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }


  writeValue(input: string) {
    this.input = input;
    this.onChange(this.input)
  }

  ngOnInit(): void {
  }

  public togglePassword(type: string): void {
    if (type === InputTypeEnum.psw) {
      this.changePasswordType = InputTypeEnum.text
    } else {
      this.changePasswordType = InputTypeEnum.psw
    }
    this.type = this.changePasswordType
  }
}
