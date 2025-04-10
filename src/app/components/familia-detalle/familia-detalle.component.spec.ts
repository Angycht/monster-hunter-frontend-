import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliaDetalleComponent } from './familia-detalle.component';

describe('FamiliaDetalleComponent', () => {
  let component: FamiliaDetalleComponent;
  let fixture: ComponentFixture<FamiliaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamiliaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
