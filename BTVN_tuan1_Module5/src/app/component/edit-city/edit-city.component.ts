import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {QuocGiaService} from "../../service/quoc-gia.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Quocgia} from "../../model/quocgia";
import {City} from "../../model/city";
import {CityService} from "../../service/city.service";

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private quocGiaService:QuocGiaService,private cityService:CityService,private routerActive:ActivatedRoute) {
    this.getListQuocGia()
    this.routerActive.paramMap.subscribe((param)=>{
      this.id =  Number(<string>param.get('id'))
      this.showFormEdit()
    })
  }
  id!:number;
  formEdit!:FormGroup;
  listQuocGIa!:Quocgia[]


  getListQuocGia(){
    this.quocGiaService.getListQuocGia().subscribe((data)=>{
      this.listQuocGIa = data
    })
  }
  ngOnInit(): void {
    this.formEdit = new FormGroup({
      id:new FormControl(0),
      name:new FormControl('',Validators.minLength(5)),
      danSo:new FormControl(0,Validators.required),
      dienTich:new FormControl(0,Validators.required),
      gdp:new FormControl(0,Validators.required),
      gioiThieu:new FormControl(' ',Validators.required),
      quocGia:new FormControl(new Quocgia(2,''))
    })
  }
  showFormEdit(){
    this.cityService.findById(this.id).subscribe((data)=>{
      this.formEdit = new FormGroup({
        id:new FormControl(data.id),
        name:new FormControl(data.name,Validators.minLength(5)),
        danSo:new FormControl(data.danSo,Validators.required),
        dienTich:new FormControl(data.dienTich,Validators.required),
        gdp:new FormControl(data.gdp,Validators.required),
        gioiThieu:new FormControl(data.gioiThieu,Validators.required),
        quocGia:new FormControl(data.quocGia)
      })
    })
  }
  edit(){
    //  let idQG = + this.formCreate.value.quocGia
    // this.formCreate.value.quocGia = {id:idQG}
    console.log(this.formEdit.value)
    this.http.post<City>("http://localhost:8080/cities",this.formEdit.value).subscribe((data)=>{
      console.log(data)
    })
    this.formEdit.reset()
    this.router.navigate([''])
  }
}
