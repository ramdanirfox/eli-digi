import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'eli-carouselcss',
  templateUrl: './carouselcss.component.html',
  styleUrls: ['./carouselcss.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class CarouselcssComponent implements OnInit {
  @Input() linkPrefix = 'galeri';
  @Input() contents = [
    {
      kind: 'image',
      url: 'assets/images/slides/home/home.jpg'
    },
    {
      kind: 'image',
      url: 'assets/images/slides/home/promo.jpg',
      link: 'https://wa.me/6281295719572/?text=Halo%2C+Kak%0D%0ASaya+tertarik+dengan+stikernya.'
    },
    {
      kind: 'template',
      url: 'assets/images/slides/home/16.jpg'
    },
    // {
    //   kind: 'image',
    //   url: 'assets/images/slides/home/test.jpg'
    // },
    // {
    //   kind: 'image',
    //   url: 'assets/images/slides/home/photo.jpg'
    // }
  ];
  // pfx = environment.hashLinkPrefix;
  pfx = '';


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.readMessage().subscribe(x => {
      let splData = x.split('\n\n');
      for (let i = 1; i < splData.length; i++) {
        this.dataService.resolveFileToUrl(splData[i]).subscribe(y => {
          console.log('Img resolved!', i);
          this.contents.push({
            kind: 'image',
            url: y
          })
        });
      }
    });
  }

}
