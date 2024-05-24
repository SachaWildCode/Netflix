import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { LoginFormRenderComponent } from '../../render/login-form-render/login-form-render.component';
import { ValidationService } from '../../../../../core/services/validation.service';

@Component({
  selector: 'app-login-form-logic',
  standalone: true,
  imports: [ReactiveFormsModule, LoginFormRenderComponent],
  templateUrl: './login-form-logic.component.html',
  styleUrl: './login-form-logic.component.css',
})
export class LoginFormLogicComponent {
  constructor(
    private fb: FormBuilder,
    private ValidationService: ValidationService
  ) {}

  public userLoginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, this.ValidationService.emailValidator()]],
    password: [
      '',
      [Validators.required, this.ValidationService.passwordValidator()],
    ],
  });

  userFormSubmit() {
    if (this.userLoginForm.valid) {
      alert(
        'Form Submitted successfully!!!\n Check the values in browser console.'
      );
      console.table(this.userLoginForm.value);
    } else {
      alert('Form is not valid');
      Object.keys(this.userLoginForm.controls).forEach((field) => {
        const control = this.userLoginForm.get(field);
        if (control?.errors) {
          console.log(
            `Field: ${field}, Errors:`,
            control.errors,
            control.value
          );
        }
      });
    }
  }
}
