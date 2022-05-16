import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidenavcssComponent } from './components/sidenavcss/sidenavcss.component';
import { Sidenavcss2Component } from './components/sidenavcss2/sidenavcss2.component';
import { CarouselcssComponent } from './components/carouselcss/carouselcss.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavcssComponent,
    Sidenavcss2Component,
    CarouselcssComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    SidenavcssComponent,
    Sidenavcss2Component,
    CarouselcssComponent
  ]
})
export class SharedModule { }
