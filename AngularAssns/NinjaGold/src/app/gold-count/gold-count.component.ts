import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-gold-count',
  templateUrl: './gold-count.component.html',
  styleUrls: ['./gold-count.component.css']
})
export class GoldCountComponent implements OnInit {
  @Input() totalGold;

  constructor(private _dataService: DataService) { }


  ngOnInit() {
  }

}
