import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFarmComponent } from './new-farm.component';

describe('NewFarmComponent', () => {
  let component: NewFarmComponent;
  let fixture: ComponentFixture<NewFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
