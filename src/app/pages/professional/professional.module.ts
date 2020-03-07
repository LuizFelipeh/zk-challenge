import { NgModule } from '@angular/core';
import { ProfessionalComponent } from './professional.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: ':id',
      component: ProfessionalComponent
    }])
  ],
  declarations: [
    ProfessionalComponent
  ]
})
export class ProfessionalPageModule { }
