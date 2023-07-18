import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  orders:any;
  id:any;


  constructor(private http:HttpClient , private route:ActivatedRoute){
    this.id= this.route.snapshot.paramMap.get('id');
    console.log(this.id);

  }



  ngOnInit(): void {

    this.load();

  }

  load(){
    let observable = this.http.get('https://644dfed91b4567f4d57dd42f.mockapi.io/api/v1/orders/'+this.id);
    observable.subscribe((result:any)=>{
      this.orders=result;
      console.log(this.orders);

    });
  }


}
