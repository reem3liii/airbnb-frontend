import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import { PlaceService } from './../../../Services/place.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PlaceListComponent implements OnInit {
  constructor(public myService:PlaceService){}
  places:any;
  ngOnInit(): void{
    this.myService.getAllPlaces().subscribe(a =>{
      this.places = a;
    }
    )
  }
}
