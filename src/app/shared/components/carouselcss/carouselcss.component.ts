import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

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
      kind: 'template',
      url: 'assets/images/slides/home/16.jpg'
    },
    {
      kind: 'image',
      url: 'assets/images/slides/home/test.jpg'
    },
    {
      kind: 'image',
      url: 'assets/images/slides/home/photo.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
