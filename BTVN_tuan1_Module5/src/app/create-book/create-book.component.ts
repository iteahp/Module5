import { Component, OnInit } from '@angular/core';
import {BooksService} from "../service/books.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(private bookService:BooksService,private router:Router ) { }
  formCreate!:FormGroup
  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id:new FormControl(0),
      title:new FormControl('',Validators.minLength(5)),
      author:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
    })
  }
  create(){
    this.bookService.createBook(this.formCreate.value).subscribe((data)=>{
      console.log("du lieu Book",data)
      this.router.navigate([''])
    })
  }

}
