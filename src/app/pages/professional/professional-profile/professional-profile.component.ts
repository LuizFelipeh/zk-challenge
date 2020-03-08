import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/professional/services/professional.service';
import { ActivatedRoute } from '@angular/router';

import { forkJoin, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppointmentInfo } from 'src/app/models/appointment-info';
import { Professional } from 'src/app/models/professional';

const ID_PARAM = 'id';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.scss']
})
export class ProfessionalProfilePage implements OnInit {

  public fetchedInfo$: Observable<FetchedInfo>;
  public professionalId: number;

  constructor(
    public professionalService: ProfessionalService,
    private router: ActivatedRoute
    ) { }

  // We can also use resolves here. But I prefer this approach for Observable management.
  ngOnInit(): void {
    this.router.paramMap.pipe(take(1)).subscribe(params => {
      this.professionalId = parseInt(params.get(ID_PARAM));
      this.loadProfessional(this.professionalId);
    });
  }

  // Depending on the specifications we could use combineLatest as well
  private loadProfessional(id: number): void {
    this.fetchedInfo$ = forkJoin(
      {
        professional: this.professionalService.get(id),
        appointmentInfo: this.professionalService.getAppointmentInfo(id)
      }
    );
    // .pipe(
    //   catchError(Redirect home or search page)
    // );
  }
}

interface FetchedInfo {
  professional: Professional;
  appointmentInfo: AppointmentInfo;
}
