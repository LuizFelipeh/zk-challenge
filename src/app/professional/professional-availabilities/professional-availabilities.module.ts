import { NgModule } from '@angular/core';
import { ProfessionalAvailabilitiesComponent } from './professional-availabilities.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProfessionalAvailabilitiesComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ProfessionalAvailabilitiesComponent
  ]
})
export class ProfessionalAvailabilitiesModule { }
