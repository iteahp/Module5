import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Quocgia} from "../model/quocgia";

@Injectable({
  providedIn: 'root'
})
export class QuocGiaService {
    listQuocGia!:Quocgia[]
  constructor(private http:HttpClient) { }
  getListQuocGia(){
    return this.http.get<Quocgia[]>('http://localhost:8080/quocgia')
  }
}
