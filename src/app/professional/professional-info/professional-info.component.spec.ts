import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalInfoComponent } from './professional-info.component';
import { Professional } from 'src/app/models/professional';
import { Pipe, PipeTransform, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppointmentInfo } from 'src/app/models/appointment-info';

@Pipe({ name: 'translate' })
class TranslateStub implements PipeTransform {
  transform(value: string) {
    return '';
  }
}

const mockProfessional = {
  profileUrl: 'url',
  name: 'name',
  id: 1,
  profession: 'prof',
  description: 'desc',
  addressCity: 'city',
  rating: 1,
  review_count: 145
} as Professional;

const mockAppointmentInfo = {
  price: {
    value: 30,
    currency: 'BRL'
  },
  duration: 50
} as AppointmentInfo;

describe('ProfessionalInfoComponent', () => {
  let component: ProfessionalInfoComponent;
  let fixture: ComponentFixture<ProfessionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfessionalInfoComponent,
        TranslateStub
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalInfoComponent);

    component = fixture.componentInstance;
    component.professional = mockProfessional;
    component.appointmentInfo = mockAppointmentInfo;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // We could make tests for every important piece of information. I am doing only for
  // h1 and h2 since they are important for SEO.
  it('shows the name on h1', () => {
    const professionalInfoComponent: HTMLElement = fixture.debugElement.nativeElement;
    const nameSpan: HTMLElement = professionalInfoComponent.querySelector('h1');

    expect(nameSpan.textContent).toEqual('name');
  });

  it('shows the description on h2', () => {
    const professionalInfoComponent: HTMLElement = fixture.debugElement.nativeElement;
    const nameSpan: HTMLElement = professionalInfoComponent.querySelector('h2');

    expect(nameSpan.textContent).toEqual('desc');
  });
});
