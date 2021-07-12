import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuanceContractsComponent } from './issuance-contracts.component';

describe('IssuanceContractsComponent', () => {
  let component: IssuanceContractsComponent;
  let fixture: ComponentFixture<IssuanceContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuanceContractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuanceContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
