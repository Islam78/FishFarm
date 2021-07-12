import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRequestProjectsComponent } from './transfer-request-projects.component';

describe('TransferRequestProjectsComponent', () => {
  let component: TransferRequestProjectsComponent;
  let fixture: ComponentFixture<TransferRequestProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferRequestProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRequestProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
