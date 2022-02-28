import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  productList :Product[]=[

      new Product(1,"anh dep","http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",false),
      new Product(2,"anh sieu dep","https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",true),
  ]
    create(product:Product){
    let check = true;
      for (let i = 0; i < this.productList.length; i++) {
        if (product.id===this.productList[i].id){
          this.productList[i] = new Product(product.id,product.name,product.img,product.status)
          check = false
        }
      }
      if (check){
        this.productList.push(product)
      }

    }
}
