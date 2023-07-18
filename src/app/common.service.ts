import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseurl="https://644dfed91b4567f4d57dd42f.mockapi.io/api/v1/";
  constructor(private http:HttpClient) { }

  get(path:string){
    return this.http.get(this.baseurl + path);
  }

  post(path:string,data:any){
    return this.http.post(this.baseurl + path,data);
  }

  put(path:string,data:any){
    return this.http.put(this.baseurl + path,data);
  }

  delete(path:string){
    return this.http.delete(this.baseurl + path);
  }
}
