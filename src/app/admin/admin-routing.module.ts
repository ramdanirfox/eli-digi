import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OperationOkComponent } from './operation-ok/operation-ok.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'ok',
    component: OperationOkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
