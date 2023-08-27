import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ErrorMsgEnum} from "../../interface/error-msg.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  public disabled: boolean = false;
  public authUserList = JSON.parse(localStorage.getItem('signUp') || '{}');

  private errorMsgEnum = ErrorMsgEnum;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router) {
  }

  ngOnInit(): void {
    this.form = this.initForm();
    this.changeControlError();
  }

  private changeControlError(): void {
    this.form.valueChanges.subscribe(() => {
      if (this.form.hasError('invalidUser')) {
        this.form.setErrors({'invalidUser': null});

        this.form.updateValueAndValidity();
      }
    });
  }

  public get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  public get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }

  public signIn(): void {

    const hasUserValid = this.authUserList.find((el: any) => {
      return el.email === this.emailControl.value
        && el.password === this.passwordControl.value;
    });

    if (hasUserValid) {
      localStorage.setItem('registeredUser', JSON.stringify(hasUserValid))
      this.route.navigate(['posts']);
    } else {
      this.form.setErrors({invalidUser: this.errorMsgEnum.INVALID_USER})
    }

  }

}
