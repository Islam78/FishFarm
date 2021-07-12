import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdminComponent } from './all-admin.component';

describe('AllAdminComponent', () => {
  let component: AllAdminComponent;
  let fixture: ComponentFixture<AllAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
