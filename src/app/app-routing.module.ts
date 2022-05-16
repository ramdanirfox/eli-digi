import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beranda',
    pathMatch: 'full'
  },
  {
    path: 'beranda',
    loadChildren: () => import('./home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'galeri',
    loadChildren: () => import('./gallery/gallery.module').then(x => x.GalleryModule)
  },
  {
    path: 'layanan',
    loadChildren: () => import('./content/content.module').then(x => x.ContentModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
