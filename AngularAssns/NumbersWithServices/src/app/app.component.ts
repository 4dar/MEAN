import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sum: number[] = [];

  constructor(private _dataService: DataService){}

  ngOnInit() {
    this.sum = this._dataService.retrieveTotalSum();
  }

  findDifference(){
    this._dataService.difference();
  }


}
