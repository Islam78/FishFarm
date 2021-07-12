import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteEmployeeComponent } from './complete-employee.component';

describe('CompleteEmployeeComponent', () => {
  let component: CompleteEmployeeComponent;
  let fixture: ComponentFixture<CompleteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
