import { Component, OnInit, Input } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { AppointmentInfo } from 'src/app/models/appointment-info';

@Component({
  selector: 'professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent {

  @Input() professional: Professional;
  @Input() appointmentInfo: AppointmentInfo;

  constructor() {}
}
