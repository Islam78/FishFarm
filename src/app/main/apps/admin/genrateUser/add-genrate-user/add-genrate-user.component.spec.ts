import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenrateUserComponent } from './add-genrate-user.component';

describe('AddGenrateUserComponent', () => {
  let component: AddGenrateUserComponent;
  let fixture: ComponentFixture<AddGenrateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGenrateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGenrateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
