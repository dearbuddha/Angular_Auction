import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, 'Item One', 1.99, 3.5, "1", ['电子产品', '硬件产品']),
      new Product(2, 'Item Two', 1.99, 2.5, "2", ['图书']),
      new Product(3, 'Item Three', 1.99, 4.5, "3", [ '硬件产品']),
      new Product(4, 'Item Four', 1.99, 1.5, "4", ['电子产品', '硬件产品']),
      new Product(5, 'Item Five', 1.99, 3.5, "5", ['电子产品']),
      new Product(6, 'Item Six', 1.99, 2.5, "6", ['图书']),
    ]
  }

}

//单独拎出去写一个model
export class Product{
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>){

  }
}
