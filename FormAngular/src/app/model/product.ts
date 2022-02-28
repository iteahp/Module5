export class Product {
  id!:number
  name!: string
  img!:string
  status!:boolean


  constructor(id: number, name: string, img: string, status: boolean) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.status = status;
  }
}
