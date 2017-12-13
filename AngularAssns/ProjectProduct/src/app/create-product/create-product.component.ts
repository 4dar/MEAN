import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { AppRoutingModule } from '../app-routing.module';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product = new Product();
  products: Array<any> = [];

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this.product = new Product();
  }

  onSubmit(){
    this._dataService.makeProduct();
    this._router.navigate(['/productlist']);
  }


}
