import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: ':id',
      loadChildren: () => import('./professional-profile/professional-profile.module')
        .then(m => m.ProfessionalPageModule)
    }])
  ]
})
export class ProfessionalPageModule { }
