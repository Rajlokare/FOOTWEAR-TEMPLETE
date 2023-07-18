import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


declare var Razorpay :any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout:any;
show: any;
total:any;
subtotal=0;
delivery=100;
discount=50;
grandtotal: any;
id:any;
data:any;

options = {
  "key": "rzp_live_Ay9af2dQeUH8A6",
  "amount": "200",
  "name": "Rohan Amte",
  "description": "Web Development",
  "image": "https://www.abhijitgatade.com/assets/img/favicon.png",
  "order_id":"",
  "handler": function (response: any){
      var event = new CustomEvent("payment.success",
          {
              detail: response,
              bubbles: true,
              cancelable: true
          }
      );
      window.dispatchEvent(event);

  }

  ,

  "prefill": {

  "name": "Rohan ",

  "email": "ramte75@gmail.com",

  "contact": "9890429284"

  },

  "notes": {

  "address": ""

  },

  "theme": {

  "color": "#3399cc"

  }

  };


  @HostListener ('window:payment.success',['$event'])
    onPaymentsuccess(event:any):void{
        console.log("Payment Received");
        this.common.put("/orders/"+ this.id,{status:"Paid"}).subscribe((result:any)=>{
          console.log("Status Updated");

        })

    }




 constructor(private router:Router, private http:HttpClient, private common:CommonService){}


  ngOnInit(): void {
    this.showcart();
    this.objfun();
    this.cartsubtotal();

    }


    objfun(){
      this.checkout= new FormGroup({
        name:new FormControl("",Validators.compose([Validators.required])),
        mobileno:new FormControl("",Validators.compose([Validators.required,Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/)])),
        email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
        address:new FormControl("",Validators.compose([Validators.required])),
        city:new FormControl("",Validators.compose([Validators.required])),
        pincode:new FormControl("",Validators.compose([Validators.required,Validators.pattern(/^[1-9][0-9]{5}$/)])),
      })
    }


    showcart(){
      this.show= JSON.parse(localStorage.getItem('cart')||'[]')
       console.log(this.show);

     }

     checkoutcart(data:any){
      data["product"]=this.show;
      data["status"]="pending";
      // console.log(data);
      this.common.post("orders",data).subscribe((result:any)=>{

        this.data=result;
        console.log(this.data);

      alert("order placed...");
      this.id = result.id;
      console.log(this.id);
        this.options.amount ="200"; //(this.grandtotal * 100).toString();
        this.options.prefill.name =this.data.name;
        this.options.prefill.email = this.data.email;
        this.options.prefill.contact = this.data.mobileno;
        var razorpay = new Razorpay(this.options);
        razorpay.open();

      });





     }

     cartsubtotal(){

      let sub =0;
      for (let i=0;i<this.show.length;i++){
        this.total=this.show[i].price * this.show[i].quentity;
        this.subtotal= sub+=this.total;
        this.grandtotal=this.subtotal-(this.discount-this.delivery);
        // this.grandtotal = this.total + this.delivery + this.discount;
        // console.log(this.subtotal);

      }
    }






  }




