import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceListComponent } from './place-list/place-list.component';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    PlaceListComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class PlaceModule { }
