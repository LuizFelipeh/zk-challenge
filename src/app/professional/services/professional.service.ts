import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Professional } from 'src/app/models/professional';
import { AppointmentInfo } from 'src/app/models/appointment-info';
import { Availabilities } from 'src/app/models/availabilities';

const lorenIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante erat, aliquet non convallis non, pellentesque vel massa. Pellentesque at gravida velit, nec dignissim nisi. Nam quis risus congue, vestibulum diam luctus, efficitur nisi. Sed orci tortor, elementum quis iaculis sed, lobortis et elit. Vivamus metus ex, venenatis convallis fermentum ac, imperdiet elementum diam. Pellentesque ullamcorper, magna eget euismod porta, lorem elit vehicula eros, a ultricies libero mi in justo. Cras sit amet tincidunt enim. In id mollis erat. Aliquam accumsan aliquam dolor, et sagittis arcu feugiat vel. Ut turpis purus, vehicula ornare laoreet quis, laoreet vitae nunc. Curabitur mauris erat, pulvinar ac diam id, congue lobortis est. Pellentesque id tempor arcu. Donec sollicitudin iaculis neque, a dignissim tellus. Phasellus quis blandit libero.';

const mockProfessional = {
  id: 1,
  profileUrl: 'https://financasfemininas.com.br/wp-content/uploads/2016/11/dia-da-consciencia-negra-racismo-mulher-carreira-01.jpg',
  name: 'Sabrina',
  profession: 'Psicóloga',
  description: lorenIpsum,
  addressCity: 'Lisboa',
  rating: 5,
  review_count: 27
} as Professional;

const appointmentInfo = {
  price: {
    value: 160,
    currency: 'BRL'
  },
  duration: 50
} as AppointmentInfo;

const getDate = (date: Date, hour: number): Date => {
  let copiedDate = new Date(date);
  copiedDate.setHours(hour);
  copiedDate.setMinutes(0);
  return copiedDate;
};

const availabilityResponse = (date: Date): Availabilities => {
  return {
    availabilities: [
      getDate(date, 8),
      getDate(date, 9),
      getDate(date, 10),
      getDate(date, 11),
      getDate(date, 12),
      getDate(date, 13),
      getDate(date, 14),
      getDate(date, 15),
      getDate(date, 16),
      getDate(date, 17),
      getDate(date, 18),
      getDate(date, 19)
    ]
  };
};

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor() { }

  get(id: number): Observable<Professional> {
    return of(mockProfessional);
  }

  getAppointmentInfo(id: number): Observable<AppointmentInfo> {
    return of(appointmentInfo);
  }

  getAvailabities(id: number, date: Date): Observable<Availabilities> {
    return of(availabilityResponse(date));
  }
}
