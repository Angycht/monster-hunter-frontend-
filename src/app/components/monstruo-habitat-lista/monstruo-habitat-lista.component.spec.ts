import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstruoHabitatListaComponent } from './monstruo-habitat-lista.component';

describe('MonstruoHabitatListaComponent', () => {
  let component: MonstruoHabitatListaComponent;
  let fixture: ComponentFixture<MonstruoHabitatListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonstruoHabitatListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstruoHabitatListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
