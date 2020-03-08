import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalProfilePage } from './professional-profile.component';
import { RouterModule } from '@angular/router';
import { ProfessionalInfoModule } from 'src/app/professional/professional-info/professional-info.module';
import { ProfessionalAvailabilitiesModule } from 'src/app/professional/professional-availabilities/professional-availabilities.module';

@NgModule({
  imports: [
    CommonModule,
    ProfessionalInfoModule,
    ProfessionalAvailabilitiesModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfessionalProfilePage
      }
    ])
  ],
  declarations: [
    ProfessionalProfilePage
  ]
})
export class ProfessionalPageModule {}
