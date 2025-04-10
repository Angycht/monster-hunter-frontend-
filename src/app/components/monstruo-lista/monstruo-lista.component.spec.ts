import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstruoListaComponent } from './monstruo-lista.component';

describe('MonstruoListaComponent', () => {
  let component: MonstruoListaComponent;
  let fixture: ComponentFixture<MonstruoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonstruoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstruoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
