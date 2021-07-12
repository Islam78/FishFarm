import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuingActionComponent } from './issuing-action.component';

describe('IssuingActionComponent', () => {
  let component: IssuingActionComponent;
  let fixture: ComponentFixture<IssuingActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuingActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuingActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
