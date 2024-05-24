import { Component } from '@angular/core';
import { LoginFormLogicComponent } from '../../components/logic/login-form-logic/login-form-logic.component';
import { NavbarLogicComponent } from '../../../../shared/components/logic/navbar-logic/navbar-logic.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginFormLogicComponent, NavbarLogicComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
