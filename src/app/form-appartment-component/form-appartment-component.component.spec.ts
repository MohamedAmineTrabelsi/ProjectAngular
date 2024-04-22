import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppartmentComponentComponent } from './form-appartment-component.component';

describe('FormAppartmentComponentComponent', () => {
  let component: FormAppartmentComponentComponent;
  let fixture: ComponentFixture<FormAppartmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAppartmentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAppartmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
