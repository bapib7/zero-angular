import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css'],

})
export class ProductSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ///rrrrrrrrrrr
    
    ///rrrrrrrrrrr
  }
  title = 'Featured Products';
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
