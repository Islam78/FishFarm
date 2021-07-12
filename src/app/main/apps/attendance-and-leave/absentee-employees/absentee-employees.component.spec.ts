import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenteeEmployeesComponent } from './absentee-employees.component';

describe('AbsenteeEmployeesComponent', () => {
  let component: AbsenteeEmployeesComponent;
  let fixture: ComponentFixture<AbsenteeEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsenteeEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenteeEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
