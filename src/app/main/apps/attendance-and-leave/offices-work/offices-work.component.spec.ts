import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesWorkComponent } from './offices-work.component';

describe('OfficesWorkComponent', () => {
  let component: OfficesWorkComponent;
  let fixture: ComponentFixture<OfficesWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficesWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
