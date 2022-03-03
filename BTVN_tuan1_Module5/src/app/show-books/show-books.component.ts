import { Component, OnInit } from '@angular/core';
import {BooksService} from "../service/books.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {
  books:Book[] = []
  constructor(private bookService:BooksService) {
    this.getListBook()
  }

  ngOnInit(): void {
  }
  getListBook(){
    this.bookService.getListBook().subscribe((data)=>{
      this.books = data
    })
  }

}
