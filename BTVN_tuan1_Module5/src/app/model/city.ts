import {Quocgia} from "./quocgia";

export class City {
  id!: number;
  name!:string
  dienTich!:number
  danSo!:number
  gioiThieu!:string
  gdp!:number
  quocGia!:Quocgia

  constructor(id: number, name: string, dienTich: number, danSo: number, gioiThieu: string, gdp: number, quocGia: Quocgia) {
    this.id = id;
    this.name = name;
    this.dienTich = dienTich;
    this.danSo = danSo;
    this.gioiThieu = gioiThieu;
    this.gdp = gdp;
    this.quocGia = quocGia;
  }
}
