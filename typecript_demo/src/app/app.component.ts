import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typecript_demo';
  student:Student = new Student(0,"","")

  listStudent:Student[] = [
    {id:1,name:"gai xinh",img:"https://image-us.24h.com.vn/upload/4-2021/images/2021-12-23/anh-1-1640243906-582-width650height741.jpg"},
    {id:2,name:"gai xinh 2",img:"https://i.pinimg.com/736x/78/90/e1/7890e13d8985d3a5360e3e62831575fd.jpg"}
  ]

  create(){
    let check = true;
    for (let i = 0; i < this.listStudent.length; i++) {
      if (this.student.id===this.listStudent[i].id){
        this.listStudent[i].name = this.student.name
        this.listStudent[i].img = this.student.img
        check = false;
      }
    }
    if (check = true){
      this.listStudent.push(new Student(this.student.id,this.student.name,this.student.img))
    }

  }
  delete(id:number){
    for (let i = 0; i < this.listStudent.length; i++) {
      if (id===this.listStudent[i].id){
        this.listStudent.splice(i,1)
      }
    }
  }
  showEdit(student:Student){
    this.student = new Student(student.id,student.name,student.img)
  }
}

class Student{
  id:number = 0;
  name:string = '';
  img:string = '';
  constructor(id:number,name:string,img:string) {
    this.id= id;
    this.name = name;
    this.img = img;
  }
}
