import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitRequestComponent } from './exit-request.component';

describe('ExitRequestComponent', () => {
  let component: ExitRequestComponent;
  let fixture: ComponentFixture<ExitRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
