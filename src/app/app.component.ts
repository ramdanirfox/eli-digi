import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eli-digi';

  navItems = [
    {
      name: 'Beranda',
      routerLink: ['beranda']
    },
    {
      name: 'Layanan',
      routerLink: ['layanan']
    },
    {
      name: 'Galeri',
      routerLink: ['galeri']
    },
    {
      name: 'Kontak',
      routerLink: ['beranda']
    }
  ];
}
