import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRenderComponent } from './navbar-render.component';

describe('NavbarRenderComponent', () => {
  let component: NavbarRenderComponent;
  let fixture: ComponentFixture<NavbarRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
