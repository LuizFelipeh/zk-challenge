import { NgModule } from '@angular/core';
import { ProfessionalInfoComponent } from './professional-info.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProfessionalInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    ProfessionalInfoComponent
  ]
})
export class ProfessionalInfoModule { }
