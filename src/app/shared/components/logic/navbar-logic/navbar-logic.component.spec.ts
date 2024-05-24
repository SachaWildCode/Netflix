import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLogicComponent } from './navbar-logic.component';

describe('NavbarLogicComponent', () => {
  let component: NavbarLogicComponent;
  let fixture: ComponentFixture<NavbarLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarLogicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
