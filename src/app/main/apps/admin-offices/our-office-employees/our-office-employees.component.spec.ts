import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOfficeEmployeesComponent } from './our-office-employees.component';

describe('OurOfficeEmployeesComponent', () => {
  let component: OurOfficeEmployeesComponent;
  let fixture: ComponentFixture<OurOfficeEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurOfficeEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurOfficeEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
