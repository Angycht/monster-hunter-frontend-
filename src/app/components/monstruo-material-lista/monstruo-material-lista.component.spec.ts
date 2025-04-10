import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstruoMaterialListaComponent } from './monstruo-material-lista.component';

describe('MonstruoMaterialListaComponent', () => {
  let component: MonstruoMaterialListaComponent;
  let fixture: ComponentFixture<MonstruoMaterialListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonstruoMaterialListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstruoMaterialListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
