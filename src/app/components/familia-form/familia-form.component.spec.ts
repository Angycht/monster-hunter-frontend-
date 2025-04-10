import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliaFormComponent } from './familia-form.component';

describe('FamiliaFormComponent', () => {
  let component: FamiliaFormComponent;
  let fixture: ComponentFixture<FamiliaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamiliaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
