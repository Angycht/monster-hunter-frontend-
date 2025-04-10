import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatDetalleComponent } from './habitat-detalle.component';

describe('HabitatDetalleComponent', () => {
  let component: HabitatDetalleComponent;
  let fixture: ComponentFixture<HabitatDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabitatDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitatDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
