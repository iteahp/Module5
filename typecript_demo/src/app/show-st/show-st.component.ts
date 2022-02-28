import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../student";
import {ProductServiceService} from "../service/product-service.service";

@Component({
  selector: 'app-show-st',
  templateUrl: './show-st.component.html',
  styleUrls: ['./show-st.component.css']
})
export class ShowStComponent implements OnInit {
  studentList:Student[] = []
  constructor(private productService:ProductServiceService) {
    this.studentList = productService.listStudent
  }

  ngOnInit(): void {
  }

  studentShow:Student = new Student(0,"","");


  createInShowApp(){
    this.productService.createInShow(this.studentShow)
  }
  deleteInShowApp(id:number){
    this.productService.delete(id)
  }
  showEditInShow(student:Student){
    this.studentShow = new Student(student.id,student.name,student.img)
  }

}
