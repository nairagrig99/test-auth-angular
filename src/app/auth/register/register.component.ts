import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthLocalService} from "../auth-local.service";
import {confirmPasswordValidator} from "../../validators/confirm-password.validator";
import {AuthUserInterface} from "../../interface/auth-user.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private localService: AuthLocalService) {
  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  public get firstNameControl(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  public get LastNameControl(): FormControl {
    return this.form.get('lastName') as FormControl;
  }

  public get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  public get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  public get rePasswordControl(): FormControl {
    return this.form.get('re_password') as FormControl;
  }

  private initForm(): FormGroup {
    const regExpForPsw = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}';
    const regExpForUserName = '^[a-zA-Z][a-zA-Z0-9_]{3,29}$';

    return this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.pattern(regExpForUserName)]],
      lastName: [null, [Validators.required, Validators.pattern(regExpForUserName)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required,
        Validators.pattern(regExpForPsw)]],
      re_password: [null, [Validators.required,
        Validators.pattern(regExpForPsw)]],
    }, {validators: confirmPasswordValidator})
  }

  public signUp(): void {

    const getAuthenticatedUsersList = JSON.parse(localStorage.getItem('signUp') || '{}')

    let isUserAlreadyCreated = false;

    if (getAuthenticatedUsersList.length > 0) {
      isUserAlreadyCreated = getAuthenticatedUsersList.find((el: AuthUserInterface) => el.email === this.emailControl.value)
    }

    if (this.form?.valid && !isUserAlreadyCreated) {
      this.localService.setSignUpUser(this.form.value);
    }
  }


}
