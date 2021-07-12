import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendEmployeeComponent } from './recommend-employee.component';

describe('RecommendEmployeeComponent', () => {
  let component: RecommendEmployeeComponent;
  let fixture: ComponentFixture<RecommendEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
