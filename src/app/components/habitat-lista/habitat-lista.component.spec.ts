import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatListaComponent } from './habitat-lista.component';

describe('HabitatListaComponent', () => {
  let component: HabitatListaComponent;
  let fixture: ComponentFixture<HabitatListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabitatListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitatListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
