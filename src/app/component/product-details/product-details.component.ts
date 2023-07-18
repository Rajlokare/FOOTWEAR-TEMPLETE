import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:any;
  users:any;
  cartarray:any=[];


  counter=1;
  step=1;

    constructor(private http:HttpClient, private route:ActivatedRoute, private commmon:CommonService, private router:Router){

      this.id = route.snapshot.paramMap.get('id');

      // this.id = route.paramMap.get('id');
          console.log(this.id);

      // http.get("https://fakestoreapi.com/products"+this.id).subscribe((result:any)=>{
      //   this.product=result;
      //   console.log(result);

      // })


  }



  ngOnInit(): void {
    let observable = this.http.get('https://644dfed91b4567f4d57dd42f.mockapi.io/api/v1/product/'+this.id);
    observable.subscribe((result:any)=>{
      this.users=result;
      console.log(this.users);

    });

    if(localStorage.getItem("cart")!=null){
      this.cartarray=JSON.parse(localStorage.getItem("cart")||'[]');
    }

  }


  decriment(){
    this.counter -=this.step
  }


  increment(){
    this.counter +=this.step

  }


  AddCart(){
    let pro ={
      id:this.users.id,
      title:this.users.title,
      description:this.users.description,
      price:this.users.price,
      mrp:this.users.mrp,
      category:this.users.category,
      quentity:this.counter,
      avatar:this.users.avatar
    };
    this.cartarray.push(pro);
    localStorage.setItem('cart',JSON.stringify(this.cartarray));
    this.router.navigate(["/addcart"]);

  }
    }



