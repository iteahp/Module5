import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../../service/product-service.service";
import {Product} from "../../model/product";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  productList! :Product[];
  constructor(private productService:ProductServiceService) {
    this.productList = this.productService.productList
  }
  formCreate!:FormGroup;
  ngOnInit(): void {
    this.formCreate =new FormGroup({
      id:new FormControl(0),
      name:new FormControl('',[Validators.minLength(5)]),
      img:new FormControl('',Validators.required),
      status:new FormControl(true,Validators.required)
    })
  }


  create(){
    this.productService.create(this.formCreate.value)
    this.formCreate.reset()
  }



  showEdit(product:Product) {
    this.formCreate=new FormGroup({
      id:new FormControl(product.id),
      name:new FormControl(product.name,[Validators.minLength(5)]),
      img:new FormControl(product.img,Validators.required),
      status:new FormControl(product.status,Validators.required)
    })

  }
}
