import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRequestDepartmentComponent } from './transfer-request-department.component';

describe('TransferRequestDepartmentComponent', () => {
  let component: TransferRequestDepartmentComponent;
  let fixture: ComponentFixture<TransferRequestDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferRequestDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRequestDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
