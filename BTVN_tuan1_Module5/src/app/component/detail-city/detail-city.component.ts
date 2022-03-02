import { Component, OnInit } from '@angular/core';
import {City} from "../../model/city";
import {CityService} from "../../service/city.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Quocgia} from "../../model/quocgia";

@Component({
  selector: 'app-detail-city',
  templateUrl: './detail-city.component.html',
  styleUrls: ['./detail-city.component.css']
})
export class DetailCityComponent implements OnInit {
   city = new City(1,'',0,0,'',0,new Quocgia(1,''))

  constructor(private cityService:CityService,private router:ActivatedRoute) {
      this.router.paramMap.subscribe((param)=>{
        this.id =  Number(<string>param.get('id'))
        this.detail()
      })
  }
  id!:number
  ngOnInit(): void {

  }
  detail(){
   this.cityService.findById(this.id).subscribe((data)=>{
     this.city = data
   })
  }

}
