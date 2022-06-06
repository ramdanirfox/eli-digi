import { isPlatformBrowser } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'eli-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  imgPreview: string | ArrayBuffer | null = '';
  imgFile: File | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: any,
               private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.dataService.resolveFileToUrl('AgACAgUAAx0EapgEfAADL2KdNL1IEKx3vjhL-zLJf20bStwEAALrszEb_FTpVLjV2Smv4b-CAQADAgADeAADJAQ').subscribe(x => {
      console.log('filenyaaa', x);
      this.imgPreview = x;
    });
  }

  fileEvt(evt: any) {
    if (isPlatformBrowser(this.platformId)) {
      const file = evt.target.files[0];
      if (file) {
        this.imgFile = file;
        console.log('Filenya', file);
        const reader = new FileReader();
        reader.onload = () => {
          this.imgPreview = reader.result;
        }
        reader.readAsDataURL(file);
      }
    }
  }

  submitImage(evt?: any) {
    if (this.imgFile) {
      if (evt) { evt.preventDefault(); console.log('BATAAAL'); }
      this.dataService.addSlideshow(this.imgFile).subscribe(x => {
        console.log('Hasil', x);
        this.router.navigate(['/admin/ok']);
      });
    }
  }

  test() {
    // this.dataService.editMessage('SLIDESHOW_IMAGES\n\nAgACAgUAAx0EapgEfAADL2KdNL1IEKx3vjhL-zLJf20bStwEAALrszEb_FTpVLjV2Smv4b-CAQADAgADeAADJAQ\n\nAgACAgUAAx0EapgEfAADO2Kd6P2SmlfhP7lnq-1ax4vYOChWAAINsDEb_FTxVGV3pcwF3OHWAQADAgADdwADJAQ').subscribe(x => {
    //   console.log('ms_res', x);
    // });

    // this.dataService.editMessage('SLIDESHOW_IMAGES').subscribe(x => {
    //   console.log('ms_res', x);
    // });

    // this.dataService.readMessage().subscribe(x => {
    //   console.log('ms_data', x);
    // });
  }

}
