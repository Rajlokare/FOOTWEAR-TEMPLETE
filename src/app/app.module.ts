import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminproductsComponent } from './adminlogin/adminproducts/adminproducts.component';
import { AdminproductComponent } from './adminlogin/adminproduct/adminproduct.component';
import { AddcartComponent } from './addcart/addcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './adminlogin/orders/orders.component';
import { OrderdetailsComponent } from './adminlogin/orderdetails/orderdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    AdminComponent,
    AdminproductsComponent,
    AdminproductComponent,
    AddcartComponent,
    CheckoutComponent,
    OrdersComponent,
    OrderdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
