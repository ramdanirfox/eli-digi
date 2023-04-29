import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eli-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  exclusive = ['Print Stiker A3+', 'Print A3+'];
  serviceOptions = [
    'Print Stiker A3+',
    'Print A3+',
    'Banner/Spanduk',
    'Brosur Digital',
    'Kalender',
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
  servicePic: any = {
    'Print Stiker A3+': '',
    'Print A3+': '',
    'Banner/Spanduk': 'banner_spanduk',
    'Brosur Digital': 'brosur_digital',
    'Kalender': 'kalender',
    'ID Card': 'id_card',
    'Kartu Nama': 'kartu_nama',
    'Kop Surat': 'kop_surat',
    'Nota': 'nota',
    'Raport': 'raport',
    'Piala': 'piala',
    'Medali': 'medali',
    'Mug': 'mug',
    'Stempel': 'stempel',
    'Print, Scan dan Fotocopy Dokumen': 'print_scan_fotokopi'
  };
  serviceSelected = '';
  routerMap: any = {
    'Print Stiker A3+': 'stiker',
    'Print A3+': 'cetak',

    // 'Banner/Spanduk': 'banner_spanduk',
    // 'ID Card': 'id_card',
    // 'Kartu Nama': 'kartu_nama',
    // 'Kop Surat': 'kop_surat',
    // 'Nota': 'nota',
    // 'Raport': 'raport',
    // 'Piala': 'piala',

  }
  constructor() { }

  ngOnInit(): void {
  }

}
