import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  farm: number;
  constructor(private _dataService: DataService) { }


  ngOnInit() {
  }

  getGold(sender:string){
    this.farm = this._dataService.farmGold(sender);
  }



}
