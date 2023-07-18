import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent  implements OnInit{
  id:any;
  formdata:any;

  constructor(private router:Router, private http:HttpClient, private common:CommonService, private route:ActivatedRoute){
    this.id= this.route.snapshot.paramMap.get("id");
    // alert(this.id);

  }




  ngOnInit(): void {
    this.formdata = new FormGroup({
      title : new FormControl(""),
      discription: new FormControl(""),
      category: new FormControl(""),
      price: new FormControl(""),
      mrp:new FormControl("")
      // image: new FormControl("")
    });

    if(this.id !=null){
      this.common.get("/product/" +this.id).subscribe((result:any)=>{
        console.log(result);
        this.formdata.patchValue({
          title:result.title,
          discription:result.discription,
          category:result.category,
          price:result.price,
          mrp:result.mrp,
          avatar:result.avatar
        })

      })
    }


  }


  save(data:any){

    if(this.id == null){
    this.common.post("product/",data).subscribe((result:any)=>{
      console.log(result);
      this.router.navigate(["/adminproducts"]);

    })
  }
  else
  {
    this.common.put("product/"+this.id, data).subscribe((result:any)=>{
      console.log(result);
      this.router.navigate(["/adminproducts"]);

    })
  }
  }

}
