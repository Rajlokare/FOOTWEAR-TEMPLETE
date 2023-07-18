import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit{
counter=1;
step=1;
total:any;
subtotal=0;
delivery=100;
discount=50;
grandtotal: any;

constructor(private router:Router){}

  ngOnInit(): void {
    this.load();
    this.qty();
    this.cartsubtotal();
    // this.grandtotal();
  }

  setcart:any;
load(){
 this.setcart=JSON.parse(localStorage.getItem("cart") || '[]')
  // alert(this.setcart);
  console.log(this.setcart);
}




decriment(index:number){
this.setcart[index].quentity -=1;
this.qty();

}

incriment(index:number){
  this.setcart[index].quentity +=1;
  this.qty();

}

qty(){

  localStorage.setItem('cart',JSON.stringify(this.setcart));

}



delete(id:number){
  // if(confirm("Sure to Delete ?")){
  //   localStorage.removeItem('cart');
  //   this.router.navigate(["/addcart"]);
  // }
  // else
  this.setcart = this.setcart.filter((item:any)=>{
    if(item.id != id){
      return item;
    }

  })
  localStorage.setItem('cart',JSON.stringify(this.setcart));
}

cartsubtotal(){

  let sub =0;
  for (let i=0;i<this.setcart.length;i++){
    this.total=this.setcart[i].price * this.setcart[i].quentity;
    this.subtotal= sub+=this.total;
    this.grandtotal=this.subtotal-(this.discount-this.delivery);
    // this.grandtotal = this.total + this.delivery + this.discount;
    console.log(this.subtotal);

  }
}

// cartdelivery(){
//   let sub=0;
//   for(let i=0;i<this.setcart.length;i++)

// }

// grandtotal(){
//   let tot = 0;
//   tot= this.ptotal - this.discount;

// }

// gtotal=this.grandtotal();

gocheckout()
{
  this.router.navigate(['/checkout'])
}



}


