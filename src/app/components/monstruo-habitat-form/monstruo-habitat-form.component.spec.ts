import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstruoHabitatFormComponent } from './monstruo-habitat-form.component';

describe('MonstruoHabitatFormComponent', () => {
  let component: MonstruoHabitatFormComponent;
  let fixture: ComponentFixture<MonstruoHabitatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonstruoHabitatFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstruoHabitatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
