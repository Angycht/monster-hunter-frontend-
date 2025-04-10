import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstruoMaterialFormComponent } from './monstruo-material-form.component';

describe('MonstruoMaterialFormComponent', () => {
  let component: MonstruoMaterialFormComponent;
  let fixture: ComponentFixture<MonstruoMaterialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonstruoMaterialFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstruoMaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
