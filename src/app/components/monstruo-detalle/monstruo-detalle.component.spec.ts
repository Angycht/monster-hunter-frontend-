import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstruoDetalleComponent } from './monstruo-detalle.component';

describe('MonstruoDetalleComponent', () => {
  let component: MonstruoDetalleComponent;
  let fixture: ComponentFixture<MonstruoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonstruoDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstruoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
