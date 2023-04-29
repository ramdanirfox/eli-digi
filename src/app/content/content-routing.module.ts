import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { HargaCetakComponent } from './harga-cetak/harga-cetak.component';
import { HargaStikerComponent } from './harga-stiker/harga-stiker.component';
import { HargaGambarComponent } from './harga-gambar/harga-gambar.component';

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
  {
    path: 'info/:layanan',
    component: HargaGambarComponent,
    // data: {jenis: 'info'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
