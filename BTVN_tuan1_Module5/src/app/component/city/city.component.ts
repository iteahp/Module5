import { Component, OnInit } from '@angular/core';
import {CityService} from "../../service/city.service";
import {City} from "../../model/city";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cites:City[]=[];
  constructor(private  http:HttpClient,private router:Router) {
     this.getCites()
  }

  ngOnInit(): void {
  }
  getCites(){
    this.http.get<City[]>("http://localhost:8080/cities").subscribe((data)=>{
      this.cites = data
      console.log(data)
    })
  }
  delete(id:number){
    if ( confirm("Bạn đã chắc chắn chưa")){
      this.http.delete(`http://localhost:8080/cities/${id}`).subscribe((data)=>{
        this.getCites()
      })
      this.getCites()
    }
  }

}
