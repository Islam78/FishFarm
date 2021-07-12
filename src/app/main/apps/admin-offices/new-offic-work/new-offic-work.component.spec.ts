import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewOfficWorkComponent } from './new-offic-work.component';


describe('NewOfficWorkComponent', () => {
  let component: NewOfficWorkComponent;
  let fixture: ComponentFixture<NewOfficWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOfficWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOfficWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
