import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfessionalService } from '../services/professional.service';
import { map, take } from 'rxjs/operators';
import { addDaysToDate } from 'src/app/utils/date';

@Component({
  selector: 'professional-availabilities',
  templateUrl: './professional-availabilities.component.html',
  styleUrls: ['./professional-availabilities.component.scss']
})
export class ProfessionalAvailabilitiesComponent implements OnInit {

  @Input() professionalId: number;
  @Output() availabilityClick = new EventEmitter<Date>();

  public activeDates: Date[];
  public today = new Date();

  public availabilities: Record<string, Date[]> = {};

  constructor(private professionalService: ProfessionalService) { }

  ngOnInit(): void {
    this.setInitialDates();
  }

  private setInitialDates(): void {
    this.activeDates = [
      this.today,
      addDaysToDate(this.today, 1),
      addDaysToDate(this.today, 2),
      addDaysToDate(this.today, 3)
    ];

    this.activeDates.map((date: Date) => this.getDateAvailabilities(date));
  }

  // Cache
  public getDateAvailabilities(date: Date): void {
    if ( this.availabilities[date.toString()]) { return; }

    this.professionalService
    .getAvailabities(this.professionalId, date)
    .pipe(
      take(1),
      map(({ availabilities }) => availabilities)
    ).subscribe((availabilities: Date[]) =>
      this.availabilities[date.toString()] = availabilities
    );
  }

  public previousDates(): void {
    this.removeLastDate();
    const firstDate = this.activeDates[0];
    const previousDate = addDaysToDate(firstDate, -1);

    this.activeDates.unshift(previousDate);
    this.getDateAvailabilities(previousDate);
  }

  public nextDates(): void {
    this.removeFirstDate();
    const lastDate = this.activeDates[this.activeDates.length - 1];
    const nextDate = addDaysToDate(lastDate, 1);

    this.activeDates.push(nextDate);
    this.getDateAvailabilities(nextDate);
  }

  public onAvailabilityClick(date: Date) {
    this.availabilityClick.emit(date);
  }

  private removeFirstDate(): void {
    this.activeDates.splice(0, 1);
  }

  private removeLastDate(): void {
    this.activeDates.pop();
  }
}
