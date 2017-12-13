import { Component } from '@angular/core';
import { Product } from './product';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product = new Product();
  products = [];



  ngOnInit() {
  }

  makeProduct(){
    this.products.push(this.product);
    this.product = new Product();
  }


}
