import { Injectable } from '@angular/core';
import {City} from "../model/city";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {
 cites:City[]=[];
 getCites():Observable<City[]>{
   return this.http.get<City[]>("http://localhost:8080/cities")
 }
  constructor(private  http:HttpClient
  ) { }

  findById(id:number):Observable<City>{
   return this.http.get<City>("http://localhost:8080/cities/"+id)
  }
}
