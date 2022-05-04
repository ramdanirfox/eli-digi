import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eli-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  serviceOptions = [
    'Print Stiker A3+',
    'Print A3+',
    'Banner/Spanduk',
    'ID Card',
    'Kartu Nama',
    'Kop Surat',
    'Nota',
    'Raport',
    'Piala',
    'Medali',
    'Mug',
    'Stempel',
    'Print, Scan dan Fotocopy Dokumen'
  ];
  serviceSelected = '';
  routerMap: any = {
    'Print Stiker A3+': 'stiker',
    'Print A3+': 'cetak'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
