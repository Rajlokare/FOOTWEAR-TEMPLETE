import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ProductComponent } from './component/product/product.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminproductsComponent } from './adminlogin/adminproducts/adminproducts.component';
import { AdminproductComponent } from './adminlogin/adminproduct/adminproduct.component';
import { AddcartComponent } from './addcart/addcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './adminlogin/orders/orders.component';
import { OrderdetailsComponent } from './adminlogin/orderdetails/orderdetails.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"product",component:ProductComponent},
  {path:"contact",component:ContactComponent},

  {path:"productdetails/:id",component:ProductDetailsComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminproducts",component:AdminproductsComponent},
  {path:"adminproduct",component:AdminproductComponent},
  {path:"adminproduct/:id",component:AdminproductComponent},
  {path:"addcart",component:AddcartComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"orders",component:OrdersComponent},
  {path:"orderdetails/:id",component:OrderdetailsComponent},
  {path:"**",redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }
