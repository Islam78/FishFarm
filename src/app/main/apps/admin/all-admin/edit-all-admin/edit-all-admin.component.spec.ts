import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllAdminComponent } from './edit-all-admin.component';

describe('EditAllAdminComponent', () => {
  let component: EditAllAdminComponent;
  let fixture: ComponentFixture<EditAllAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAllAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
