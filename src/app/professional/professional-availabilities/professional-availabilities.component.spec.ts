import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAvailabilitiesComponent } from './professional-availabilities.component';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { ProfessionalService } from '../services/professional.service';
import { of } from 'rxjs';
import { addDaysToDate } from 'src/app/utils/date';

@Pipe({name: 'translate'})
class TranslateStub implements PipeTransform {
  transform(value: string) {
    return '';
  }
}

@Injectable()
class ProfessionalServiceStub {
  public getAvailabities() { return of({ availabilities: null }); }
}

describe('ProfessionalAvailabilitiesComponent', () => {
  let component: ProfessionalAvailabilitiesComponent;
  let fixture: ComponentFixture<ProfessionalAvailabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfessionalAvailabilitiesComponent,
        TranslateStub
      ],
      providers: [
        { provide: ProfessionalService, useClass: ProfessionalServiceStub }
      ]
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

  it('should go to the next day on button pressed', () => {
    component.nextDates();

    expect(component.activeDates).toEqual([
      addDaysToDate(component.today, 1),
      addDaysToDate(component.today, 2),
      addDaysToDate(component.today, 3),
      addDaysToDate(component.today, 4)
    ]);
  });

  it('should go to the previous day on button pressed', () => {
    component.previousDates();

    expect(component.activeDates).toEqual([
      addDaysToDate(component.today, -1),
      component.today,
      addDaysToDate(component.today, 1),
      addDaysToDate(component.today, 2)
    ]);
  });
});
