import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ProfessionalProfilePage } from './professional-profile.component';
import { Component, Input, Injectable } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { AppointmentInfo } from 'src/app/models/appointment-info';
import { ProfessionalService } from 'src/app/professional/services/professional.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

@Component({selector: 'professional-info'})
class ProfessionalInfoStub {
  @Input() professional: Professional;
  @Input() appointmentInfo: AppointmentInfo;
}

@Component({selector: 'professional-availabilities'})
class ProfessionalAvailabilitiesStub {
  @Input() professionalId: number;
}

@Injectable()
class ProfessionalServiceStub {
  get() { of(null); }
  getAppointmentInfo() { of(null); }
}

describe('ProfessionalProfilePage', () => {
  let component: ProfessionalProfilePage;
  let fixture: ComponentFixture<ProfessionalProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProfessionalProfilePage,
        ProfessionalInfoStub,
        ProfessionalAvailabilitiesStub
      ],
      providers: [
        { provide: ProfessionalService, useClass: ProfessionalServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calls professional service with the right param on loadProfessional', () => {
    spyOn(component.professionalService, 'get').and.callThrough();
    spyOn(component.professionalService, 'getAppointmentInfo').and.callThrough();

    component.loadProfessional(1);

    expect(component.professionalService.get).toHaveBeenCalledWith(1);
    expect(component.professionalService.getAppointmentInfo).toHaveBeenCalledWith(1);
  });
});
