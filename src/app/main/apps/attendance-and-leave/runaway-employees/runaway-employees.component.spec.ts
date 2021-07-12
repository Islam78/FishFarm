import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunawayEmployeesComponent } from './runaway-employees.component';

describe('RunawayEmployeesComponent', () => {
  let component: RunawayEmployeesComponent;
  let fixture: ComponentFixture<RunawayEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunawayEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunawayEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
