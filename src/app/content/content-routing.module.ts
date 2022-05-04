import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { HargaCetakComponent } from './harga-cetak/harga-cetak.component';
import { HargaStikerComponent } from './harga-stiker/harga-stiker.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'stiker',
    component: HargaStikerComponent,
    data: {jenis: 'stiker'}
  },
  {
    path: 'cetak',
    component: HargaCetakComponent,
    data: {jenis: 'cetak'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
