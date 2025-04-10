import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialListaComponent } from './material-lista.component';

describe('MaterialListaComponent', () => {
  let component: MaterialListaComponent;
  let fixture: ComponentFixture<MaterialListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
