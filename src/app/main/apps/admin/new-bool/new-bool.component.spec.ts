import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoolComponent } from './new-bool.component';

describe('NewBoolComponent', () => {
  let component: NewBoolComponent;
  let fixture: ComponentFixture<NewBoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
