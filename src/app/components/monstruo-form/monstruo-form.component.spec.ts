import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstruoFormComponent } from './monstruo-form.component';

describe('MonstruoFormComponent', () => {
  let component: MonstruoFormComponent;
  let fixture: ComponentFixture<MonstruoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonstruoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstruoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
