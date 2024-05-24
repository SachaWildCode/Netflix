import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLogicComponent } from './footer-logic.component';

describe('FooterLogicComponent', () => {
  let component: FooterLogicComponent;
  let fixture: ComponentFixture<FooterLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLogicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
