import { Injectable } from '@angular/core';
import {Student} from "../student";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  student:Student = new Student(0,"","")

  listStudent:Student[] = [
    {id:1,name:"gai xinh",img:"https://image-us.24h.com.vn/upload/4-2021/images/2021-12-23/anh-1-1640243906-582-width650height741.jpg"},
    {id:2,name:"gai xinh 2",img:"https://i.pinimg.com/736x/78/90/e1/7890e13d8985d3a5360e3e62831575fd.jpg"}
  ]
  createInShow(student:Student){
    let check2  = true;
    console.log("vao create ben app",student)
    for (let i = 0; i < this.listStudent.length; i++) {
      if (student.id===this.listStudent[i].id){
        this.listStudent[i].name = student.name
        this.listStudent[i].img = student.img
        check2= false;
        break
      }
    }
    if (check2 === true){
      this.listStudent.push(student)
    }
  }
  delete(id:number){
    for (let i = 0; i < this.listStudent.length; i++) {
      if (id===this.listStudent[i].id){
        this.listStudent.splice(i,1)
      }
    }
  }
  constructor() { }
}
