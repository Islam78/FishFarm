import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExistRequestComponent } from './employee-exist-request.component';

describe('EmployeeExistRequestComponent', () => {
  let component: EmployeeExistRequestComponent;
  let fixture: ComponentFixture<EmployeeExistRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeExistRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeExistRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
