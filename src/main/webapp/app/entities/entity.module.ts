import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.TrialAppEmployeeModule)
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.TrialAppDepartmentModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class TrialAppEntityModule {}
