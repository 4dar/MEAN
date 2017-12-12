import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-component',
  templateUrl: './super-saiyan-component.component.html',
  styleUrls: ['./super-saiyan-component.component.css']
})
export class SuperSaiyanComponentComponent implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 90;
  }

}
