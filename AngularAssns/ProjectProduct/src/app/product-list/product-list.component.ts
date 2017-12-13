import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { AppRoutingModule } from '../app-routing.module';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Array<any> = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.products = this._dataService.retrieveProducts();
  }

}
