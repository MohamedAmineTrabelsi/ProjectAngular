import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  priceMax!:number
listProduct:Product[]=[
  {id:1,title:'product1',price:1500,quantity:10,like:0},
  {id:2,title:'iphone 12',price:1000,quantity:10,like:0},
  {id:3,title:'product 3',price:2000,quantity:10,like:0},
]

increment(id:number){
  this.listProduct[id].like++;
}

buy(id:number){
  this.listProduct[id].quantity--;

}
}
