import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.numbers = this._dataService.retrieveAlphaNumbers();
  }

  makeAlphaNum() {
    this._dataService.generateAlpha(Math.floor(Math.random()*10));
  }


}
