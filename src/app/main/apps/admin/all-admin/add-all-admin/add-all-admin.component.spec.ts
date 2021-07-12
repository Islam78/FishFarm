import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAllAdminComponent } from './add-all-admin.component';

describe('AddAllAdminComponent', () => {
  let component: AddAllAdminComponent;
  let fixture: ComponentFixture<AddAllAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAllAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAllAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
