import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDefinitionComponent } from './work-definition.component';

describe('WorkDefinitionComponent', () => {
  let component: WorkDefinitionComponent;
  let fixture: ComponentFixture<WorkDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
