import { Injectable } from '@angular/core';
import { Product } from './product';
import { AppRoutingModule } from './app-routing.module';

@Injectable()
export class DataService {

  product = new Product();
  products = [];


  constructor() { }

  ngOnInit() {
  }

  retrieveProducts(): Array<any>{
    return this.products;
  }

  makeProduct(){
    this.products.push(this.product);
    this.product = new Product();
  }


}
