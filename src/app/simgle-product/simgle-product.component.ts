import { Component, OnInit } from '@angular/core';

declare var $:any;
declare var sync1:any;
declare var sync2:any;

@Component({
  selector: 'app-simgle-product',
  templateUrl: './simgle-product.component.html',
  styleUrls: ['./simgle-product.component.css']
})
export class SimgleProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".owl-carousel").owlCarousel();
    $("#cristian").click(function(){
      alert("Hola");
    }); 

    
  }

}
