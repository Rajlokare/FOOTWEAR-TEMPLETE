import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit {

  users:any;

constructor(private http:HttpClient, private router:Router, private common:CommonService){}



  ngOnInit(): void {
    this.load();
  }

  load(){
    let observable = this.http.get("https://644dfed91b4567f4d57dd42f.mockapi.io/api/v1/product");
    observable.subscribe((result:any)=>{
        this.users=result;
        console.log(this.users);

    })
  }

  delete(id:number){
    // alert(id);
    if(confirm("Sure to delete ?")){
      this.common.delete("product/"+id).subscribe((result:any)=>{
        this.load();
      });
    }
  }




}
