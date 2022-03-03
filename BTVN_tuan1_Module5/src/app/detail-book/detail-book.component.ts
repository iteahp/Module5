import { Component, OnInit } from '@angular/core';
import {BooksService} from "../service/books.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../model/book";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  id!:number
  book = new Book(0,'','','')
  constructor(private bookService:BooksService,private routerAc:ActivatedRoute,private router:Router) {
    this.routerAc.paramMap.subscribe((param)=>{
      this.id =  Number(<string>param.get('id'))
      this.showDetail()
    })
  }

  ngOnInit(): void {
  }
  showDetail(){
    this.bookService.detailBook(this.id).subscribe((data)=>{
      this.book = data
    })
  }

}
