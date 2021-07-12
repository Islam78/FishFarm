import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGenrateUserComponent } from './edit-genrate-user.component';

describe('EditGenrateUserComponent', () => {
  let component: EditGenrateUserComponent;
  let fixture: ComponentFixture<EditGenrateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGenrateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGenrateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
