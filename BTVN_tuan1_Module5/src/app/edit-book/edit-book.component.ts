import { Component, OnInit } from '@angular/core';
import {BooksService} from "../service/books.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
    id!:number
  formEdit!:FormGroup;
  constructor(private bookService:BooksService,private routerAc:ActivatedRoute,private router:Router) {
    this.routerAc.paramMap.subscribe((param)=>{
      this.id =  Number(<string>param.get('id'))
      this.showFormEdit()
    })
  }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      id:new FormControl(0),
      title:new FormControl('',Validators.minLength(5)),
      author:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
    })
  }
  showFormEdit(){
    this.bookService.detailBook(this.id).subscribe((data)=>{
      this.formEdit = new FormGroup({
        id:new FormControl(data.id),
        title:new FormControl(data.title,Validators.minLength(5)),
        author:new FormControl(data.author,Validators.required),
        description:new FormControl(data.description,Validators.required),
      })
    })
  }
  edit(){
    this.bookService.editBook(this.formEdit.value,this.id).subscribe((data)=>{
      console.log("xong edit")
      alert("Edit Thành Công")
      this.router.navigate([''])
    })
  }


}
