import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { SharedModule } from '../shared/shared.module';
import { HargaStikerComponent } from './harga-stiker/harga-stiker.component';
import { HargaCetakComponent } from './harga-cetak/harga-cetak.component';


@NgModule({
  declarations: [
    ContentComponent,
    HargaStikerComponent,
    HargaCetakComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule
  ]
})
export class ContentModule { }
