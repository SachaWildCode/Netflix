import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterLogicComponent } from './shared/components/logic/footer-logic/footer-logic.component';
import { LoadingService } from './core/services/loading.service';
import { CommonModule } from '@angular/common';
import { NavbarLogicComponent } from './shared/components/logic/navbar-logic/navbar-logic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterLogicComponent,
    CommonModule,
    NavbarLogicComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Netflix';
  loading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {}
}
