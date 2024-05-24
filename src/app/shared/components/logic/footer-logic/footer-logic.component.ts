import { Component } from '@angular/core';
import { FooterRenderComponent } from '../../render/footer-render/footer-render.component';

@Component({
  selector: 'app-footer-logic',
  standalone: true,
  imports: [FooterRenderComponent],
  templateUrl: './footer-logic.component.html',
  styleUrl: './footer-logic.component.css',
})
export class FooterLogicComponent {}
