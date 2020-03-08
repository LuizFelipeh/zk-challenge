import { Component, OnInit, Input } from '@angular/core';
import { ProfessionalService } from '../services/professional.service';

const day = 1000 * 60 * 60 * 24;

@Component({
  selector: 'professional-availabilities',
  templateUrl: './professional-availabilities.component.html',
  styleUrls: ['./professional-availabilities.component.scss']
})
export class ProfessionalAvailabilitiesComponent implements OnInit {

  @Input() professionalId: number;

  public activeDates: Date[];

  private today = new Date();

  constructor(private professionalService: ProfessionalService) { }

  ngOnInit(): void {
    this.setInitialDates();
  }

  private setInitialDates(): void {
    this.activeDates = [
      this.addDaysToDate(this.today, -1),
      this.today,
      this.addDaysToDate(this.today, 1),
      this.addDaysToDate(this.today, 2)
    ];
  }

  public previousDates(): void {
    this.removeLastDate();
    const firstDate = this.activeDates[0];
    this.activeDates.unshift(this.addDaysToDate(firstDate, -1));
  }

  public nextDates(): void {
    this.removeFirstDate();
    const lastDate = this.activeDates[this.activeDates.length - 1];
    this.activeDates.push(this.addDaysToDate(lastDate, 1));
  }

  private removeFirstDate(): void {
    this.activeDates.splice(0, 1);
  }

  private removeLastDate(): void {
    this.activeDates.pop();
  }

  private addDaysToDate(date: Date, days: number) {
    return new Date(date.getTime() + days * day);
  }
}
