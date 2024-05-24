import { Component } from '@angular/core';
import { NavbarRenderComponent } from '../../render/navbar-render/navbar-render.component';

@Component({
  selector: 'app-navbar-logic',
  standalone: true,
  imports: [NavbarRenderComponent],
  templateUrl: './navbar-logic.component.html',
  styleUrl: './navbar-logic.component.css',
})
export class NavbarLogicComponent {}
