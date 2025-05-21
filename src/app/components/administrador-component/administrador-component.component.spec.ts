import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorComponentComponent } from './administrador-component.component';

describe('AdministradorComponentComponent', () => {
  let component: AdministradorComponentComponent;
  let fixture: ComponentFixture<AdministradorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministradorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
