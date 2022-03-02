import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Quocgia} from "../../model/quocgia";
import {HttpClient} from "@angular/common/http";
import {City} from "../../model/city";
import {Router} from "@angular/router";
import {QuocGiaService} from "../../service/quoc-gia.service";

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private quocGiaService:QuocGiaService) {
    this.getListQuocGia()
  }
  formCreate!:FormGroup;
  listQuocGIa!:Quocgia[]

  getListQuocGia(){
    this.quocGiaService.getListQuocGia().subscribe((data)=>{
      this.listQuocGIa = data
    })
  }
  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id:new FormControl(0),
      name:new FormControl('',Validators.minLength(5)),
      danSo:new FormControl(0,Validators.required),
      dienTich:new FormControl(0,Validators.required),
      gdp:new FormControl(0,Validators.required),
      gioiThieu:new FormControl(' ',Validators.required),
      quocGia:new FormControl(new Quocgia(2,''))
    })
  }

  create(){
   //  let idQG = + this.formCreate.value.quocGia
   // this.formCreate.value.quocGia = {id:idQG}
    console.log(this.formCreate.value)
    this.http.post<City>("http://localhost:8080/cities",this.formCreate.value).subscribe((data)=>{
      console.log(data)
    })
    this.formCreate.reset()
    this.router.navigate([''])
  }

}
