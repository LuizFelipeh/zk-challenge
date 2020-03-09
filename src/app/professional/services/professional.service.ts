import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Professional } from 'src/app/models/professional';
import { AppointmentInfo } from 'src/app/models/appointment-info';
import { Availabilities } from 'src/app/models/availabilities';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private http: HttpClient) { }

  get(id: number): Observable<Professional> {
    return this.http.get<Professional>(`${environment.apiUrl}/professional/${id}`);
  }

  getAppointmentInfo(id: number): Observable<AppointmentInfo> {
    return this.http.get<AppointmentInfo>(`${environment.apiUrl}/professional/${id}/appointment-info`);
  }

  getAvailabities(id: number, date: Date): Observable<Availabilities> {
    return this.http.get<Availabilities>(
      `${environment.apiUrl}/professional/${id}/availabilities`,
      { params: new HttpParams().set('date', date.toUTCString())}
    );
  }
}
