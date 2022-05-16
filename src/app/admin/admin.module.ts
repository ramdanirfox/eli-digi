import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { OperationOkComponent } from './operation-ok/operation-ok.component';


@NgModule({
  declarations: [
    AdminComponent,
    OperationOkComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
