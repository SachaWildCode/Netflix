import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRenderComponent } from './footer-render.component';

describe('FooterRenderComponent', () => {
  let component: FooterRenderComponent;
  let fixture: ComponentFixture<FooterRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
