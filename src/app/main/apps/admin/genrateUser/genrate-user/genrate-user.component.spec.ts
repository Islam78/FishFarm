import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrateUserComponent } from './genrate-user.component';

describe('GenrateUserComponent', () => {
  let component: GenrateUserComponent;
  let fixture: ComponentFixture<GenrateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenrateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenrateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
