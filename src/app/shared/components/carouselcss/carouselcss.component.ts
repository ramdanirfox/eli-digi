import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'eli-carouselcss',
  templateUrl: './carouselcss.component.html',
  styleUrls: ['./carouselcss.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselcssComponent implements OnInit {
  @Input() linkPrefix = 'galeri';
  @Input() contents = [
    {
      kind: 'image'
    },
    {
      kind: 'template'
    },
    {
      kind: 'image'
    },
    {
      kind: 'image'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
