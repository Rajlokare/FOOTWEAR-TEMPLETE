import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  orders:any;
  products:any;

  constructor(private http:HttpClient, private router:Router){}

  ngOnInit(): void {
    this.load();
  }


  load(){
    this.http.get("https://644dfed91b4567f4d57dd42f.mockapi.io/api/v1/orders").subscribe((result:any)=>{
        this.orders=result;
        console.log(this.orders);
    })
  }


  gotodetails(){
    this.router.navigate(['/orderdetails']);
  }

}
