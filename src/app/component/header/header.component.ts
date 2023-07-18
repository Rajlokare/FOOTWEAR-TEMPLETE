import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   cartitems=0;



   ngOnInit(): void {
let cartData=localStorage.getItem('cart');
if(cartData){
 this.cartitems=JSON.parse(cartData).length
}

}
}
