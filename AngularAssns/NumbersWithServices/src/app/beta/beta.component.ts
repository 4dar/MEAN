import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.retrieveBetaNumbers();
    
  }

  makeBetaNum() {
    this._dataService.generateBeta(Math.floor(Math.random()*10));
  }

}
