import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProfessionalService } from './professional.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

describe('ProfessionalService', () => {
  let service: ProfessionalService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    service = new ProfessionalService(httpClient);

    spyOn(httpClient, 'get').and.returnValue(of(null));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calls the correct url when get method is called', () => {
    service.get(1);

    expect(httpClient.get).toHaveBeenCalledWith('http://localhost:3000/professional/1');
  });

  it('calls the correct url when getAvailabities method is called', () => {
    const mockDate = new Date('09/03/2020');
    service.getAvailabities(1, mockDate);

    expect(httpClient.get)
      .toHaveBeenCalledWith(
        'http://localhost:3000/professional/1/availabilities',
        { params: new HttpParams().set('date', mockDate.toUTCString())}
      );
  });

  it('calls the correct url when getAppointmentInfo method is called', () => {
    service.getAppointmentInfo(1);

    expect(httpClient.get).toHaveBeenCalledWith('http://localhost:3000/professional/1/appointment-info');
  });
});
