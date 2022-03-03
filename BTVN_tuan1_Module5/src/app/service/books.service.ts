import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";
import * as buffer from "buffer";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient ) { }
  getListBook():Observable<Book[]>{
      return this.http.get<Book[]>("http://localhost:3000/books")
  }
  deleteBook(id:number):Observable<Book>{
      return this.http.delete<Book>("http://localhost:3000/books/"+id)
  }
  detailBook(id:number):Observable<Book>{
      return this.http.get<Book>("http://localhost:3000/books/"+id)
  }
  createBook(book:Book):Observable<Book>{
    return  this.http.post<Book>("http://localhost:3000/books/",book)
  }
  editBook(book:Book,id:number):Observable<Book>{
      return this.http.put<Book>("http://localhost:3000/books/"+id,book)
  }



}
