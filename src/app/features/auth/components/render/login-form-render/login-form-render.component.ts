import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form-render',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form-render.component.html',
  styleUrl: './login-form-render.component.css',
})
export class LoginFormRenderComponent {
  @Input() userLoginFormRender!: FormGroup;
  @Output() formSubmit = new EventEmitter<void>();

  isFieldFocused$: boolean = false;

  onSubmit() {
    this.formSubmit.emit();
  }

  onFocus() {
    this.isFieldFocused$ = true;
  }
}
