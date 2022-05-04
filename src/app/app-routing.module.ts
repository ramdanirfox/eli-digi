import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layanan',
    pathMatch: 'full'
  },
  {
    path: 'layanan',
    loadChildren: () => import('./content/content.module').then(x => x.ContentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
