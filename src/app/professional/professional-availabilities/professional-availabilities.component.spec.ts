import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAvailabilitiesComponent } from './professional-availabilities.component';

describe('ProfessionalAvailabilitiesComponent', () => {
  let component: ProfessionalAvailabilitiesComponent;
  let fixture: ComponentFixture<ProfessionalAvailabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalAvailabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalAvailabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
