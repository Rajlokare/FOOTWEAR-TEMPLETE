import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  formdata:any;
  constructor(private router:Router){

  }

  ngOnInit(): void {

    this.formdata = new FormGroup({
        username: new FormControl(""),
        password:new FormControl("")
    });
  }



  login(data:any){
    // console.log(data);
    if(data.username =="admin" && data.password =="123"){
      alert("Welcome To Footware");

      this.router.navigate(["/adminproducts"])
    }
    else
    {
      alert("Enter valid Username or Password");
    }

  }

}
