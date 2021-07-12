import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingServicesComponent } from './ending-services.component';

describe('EndingServicesComponent', () => {
  let component: EndingServicesComponent;
  let fixture: ComponentFixture<EndingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
