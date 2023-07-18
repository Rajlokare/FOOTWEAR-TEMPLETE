import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  users:any;

        constructor(private httpclient:HttpClient){
        }


  ngOnInit(): void {
    let observable = this.httpclient.get('https://644dfed91b4567f4d57dd42f.mockapi.io/api/v1/product');
    observable.subscribe((result:any)=>{
      this.users=result;
      console.log(result);

    })
  }

}
