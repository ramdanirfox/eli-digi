import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eli-sidenavcss2',
  templateUrl: './sidenavcss2.component.html',
  styleUrls: ['./sidenavcss2.component.scss']
})
export class Sidenavcss2Component implements OnInit {
  @Input() naviItems = [
    {
      name: 'Beranda',
      routerLink: ['beranda']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
