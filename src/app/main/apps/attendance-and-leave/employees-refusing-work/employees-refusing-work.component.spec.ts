import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesRefusingWorkComponent } from './employees-refusing-work.component';

describe('EmployeesRefusingWorkComponent', () => {
  let component: EmployeesRefusingWorkComponent;
  let fixture: ComponentFixture<EmployeesRefusingWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesRefusingWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesRefusingWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
