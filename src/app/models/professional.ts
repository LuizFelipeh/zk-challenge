import { Appointment } from './appointment';

export interface Professional {
  profileUrl: string;
  name: string;
  profession: string;
  appointment: AppointmentInfo;
}
