import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignationRequestsComponent } from './resignation-requests.component';

describe('ResignationRequestsComponent', () => {
  let component: ResignationRequestsComponent;
  let fixture: ComponentFixture<ResignationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResignationRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResignationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
